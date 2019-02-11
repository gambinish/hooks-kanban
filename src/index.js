import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Columns } from "./components/Columns";
import { MyProvider } from "./context";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Modal from "./components/Modal";

const AppTitle = styled.h1`
  margin: 0;
  padding: 0;
  text-align: left;
  padding-left: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`;
const Container = styled.div`
  margin: 0;
  padding: 0;
  /* display: flex; */
  justify-content: center;
`;

export const App = () => {
  return (
    <MyProvider>
      <AppTitle>Explore Kauai</AppTitle>
      <NavBar />
      <Hero />
      <Container className="App">
        <Columns />
      </Container>
    </MyProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
