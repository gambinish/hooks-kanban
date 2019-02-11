import React, { useState } from "react";

export const ModalContext = React.createContext({
  modalDetails: 'default',
  toggleModalDetails: () => { },
});

export const ModalProvider = ({ children }) => {
  const [state, setState] = useState('default');
  return (
    <ModalContext.Provider value={{ state, setState }}>
      {children}
    </ModalContext.Provider>
  );
};

export const MyConsumer = ModalContext.Consumer;