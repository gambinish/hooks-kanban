import React, { useContext, Fragment } from "react";
import { AppContext } from "../context";
import styled from "styled-components";
import { Modal } from "./Modal";
import { ModalContext } from '../context-modal';

// styled components

const Container = styled.div`
  background-color: green;
  padding: 1rem;
  margin: 1rem;
  @media (max-width: 400px) {
    display: block;
    margin: 1rem 1rem 0 1rem;
    width: auto;
}
`;

const Image = styled.div`
  background-color: black;
  height: 15rem;
  width: 25rem;
  justify-content: center;
`;

// helper functions

const handleClick = (card, direction, board, setBoard) => {
  setBoard(existingBoard => {
    existingBoard.cards.map(elem => {
      if (elem.desc === card.desc) {
        const newPosition = card.position + direction;
        if (newPosition > 0 && newPosition <= board.board_columns.length) {
          card.position = card.position + direction;
        }
      }
    });
    return { ...existingBoard };
  });
};

const showDetails = (toggle, id) => {
  if (toggle === 'true') {
    return (
      <Modal />
    )
  }
};

export const Card = ({ card }) => {
  const { state: board, setState: setBoard } = useContext(AppContext);
  const { toggle, setToggle } = useContext(AppContext);
  const { state, setState } = useContext(ModalContext)

  return (
    <Container>
      <Image />
      <p>{card.title}</p>
      <p>{card.desc}</p>
      <button onClick={() => handleClick(card, -1, board, setBoard)}>
        move left
      </button>
      <button onClick={() => handleClick(card, 1, board, setBoard)}>
        move right
      </button>
      <button onClick={() => {
        if (toggle === 'false') {
          setToggle('true')
          console.log(card.offerDetails)
          setState(card.offerDetails)
          console.log('MODAL STATE: ', state)
        } else {
          setToggle('false')

        }
      }}>
        show details
      </button>
      {showDetails(toggle, card.id)}
    </Container>
  );
};
