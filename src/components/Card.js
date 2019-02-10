import React, { useContext } from "react";
import { AppContext } from "../context";
import styled from "styled-components";

const Container = styled.div`
  width: 32%;
  background-color: green;
  padding: 1rem;
  margin: 1rem;
  @media (max-width: 400px) {
    margin: 1rem 1rem 0 1rem;
    width: auto;
}
`;

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

export const Card = ({ card }) => {
  const { state: board, setState: setBoard } = useContext(AppContext);

  return (
    <Container>
      <h3>{card.desc}</h3>
      <button onClick={() => handleClick(card, -1, board, setBoard)}>
        move left
      </button>
      <button onClick={() => handleClick(card, 1, board, setBoard)}>
        move right
      </button>
    </Container>
  );
};
