import React, { useContext, Text } from 'react';
// import ModalStyles from './styles/ModalStyles';
import styled, { keyframes } from 'styled-components';
import { ModalContext } from '../context-modal';
import { AppContext } from "../context";

const FadeIn = keyframes`
  0% {
    height: 0px;
  }
  100% {
    height: 200px;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: white;
  opacity: 0.2;
  text-align: center;
  animation: ${FadeIn} 500ms ease-in-out 0s;
`;

const Image = styled.div`
  background-color: black;
  height: 200px;
  width: 50%;
  float: left;
`;

const DetailWrapper = styled.div`
  padding: 25px;
`;

const CloseButton = styled.button`
  float: right;
`

export const Modal = () => {
  const { state, setState } = useContext(ModalContext)
  const { toggle, setToggle } = useContext(AppContext);

  return (
    <ModalWrapper>
      <Image />
      <CloseButton onClick={() => {
        if (toggle === 'false') {
          setToggle('true')
        } else {
          setToggle('false')
        }
      }}>
        X
      </CloseButton>
      <DetailWrapper>
        {state}
      </DetailWrapper>
    </ModalWrapper>
  )
}

// TODO
// Add animations: https://codesandbox.io/s/github/jeremenichelli/react-view-transition-example/tree/master/?from-embed