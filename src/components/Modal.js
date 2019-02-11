import React, { useContext } from 'react';
// import ModalStyles from './styles/ModalStyles';
import styled from 'styled-components';
import { ModalContext } from '../context-modal';

const ModalStyles = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: crimson;
  text-align: center;
`;

export const Modal = () => {
  const { state, setState } = useContext(ModalContext)
  return (
    <ModalStyles>
      {state}
    </ModalStyles>
  )
}