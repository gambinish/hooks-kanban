import React, { Component } from 'react';
// import ModalStyles from './styles/ModalStyles';
import styled from 'styled-components';

const ModalStyles = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: crimson;
  text-align: center;
  /* z-index: -1; */
`;

class Modal extends Component {
  render() {
    return (
      <ModalStyles>
        hello
      </ModalStyles>
    );
  }
}

export default Modal;