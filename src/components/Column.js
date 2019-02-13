import React, { useContext } from "react";
import { AppContext } from "../context";
import styled from "styled-components";
import { Card } from "../components/Card";

const ColumnStyles = styled.div`
  display: grid;
  grid-template-columns: 100fr 100fr 100fr;
  grid-gap: 2px;
  @media (max-width: 400px) {
    display: block;
}
`

const SectionTitle = styled.h3`
  text-align: center;
  padding-top: 2rem;
`

const handleClick = (columnId, setBoard) => {
  const desc = window.prompt();

  setBoard(existingBoard => ({
    ...existingBoard,
    cards: [
      ...existingBoard.cards,
      {
        position: columnId,
        desc
      }
    ]
  }));
};

export const Column = ({ column }) => {
  const { state: board, setState: setBoard } = useContext(AppContext);
  const { cards } = board;
  return (
    <React.Fragment>
      <SectionTitle>{column.title}</SectionTitle>
      <ColumnStyles>
        {cards.map(card => column.id === card.position && <Card card={card} details={card.id} />)}
      </ColumnStyles>
    </React.Fragment>
  );
};
