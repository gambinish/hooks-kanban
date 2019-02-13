import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Columns } from "../components/Columns";
import { MyProvider } from "../context";
import Hero from "../components/Hero";

const Container = styled.div`
  margin: 0;
  padding: 0;
  justify-content: center;
`;

export const Home = () => {
  return (
    <MyProvider>
      <Hero />
      <Container className="App">
        <Columns />
      </Container>
    </MyProvider>
    // <div>
    //   Homepage
    // </div>
  );
};