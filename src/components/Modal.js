import React from 'react';
import Modal from 'react-modal';
import ModalStyles from './styles/ModalStyles';

const ModalDetail = ({ onRequestClose, ...otherProps }) => (
  <ModalStyles isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div>Placeholder</div>
  </ModalStyles>
);

export default ModalDetail