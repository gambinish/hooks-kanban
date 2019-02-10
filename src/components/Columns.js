import React, { useContext } from "react";
import { AppContext } from "../context";
import styled from "styled-components";
import { Column } from "../components/Column";

const Container = styled.div`
  width: auto;
  background-color: beige;
  margin: 1rem 1rem 1rem;
  @media (max-width: 400px) {
    margin: 1rem 1rem 0 1rem;
}
`;

export const Columns = () => {
  const { state } = useContext(AppContext);
  const { board_columns: boardColumns } = state;
  // console.log('state', state)

  return boardColumns.map(column => (
    <Container>
      <Column column={column} />
    </Container>
  ));
};
