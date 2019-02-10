import React, { useState } from "react";
import data from "./data.json";

export const AppContext = React.createContext();

export const MyProvider = ({ children }) => {
  const [state, setState] = useState(data);
  const [toggle, setToggle] = useState('false')
  return (
    <AppContext.Provider value={{ state, setState, toggle, setToggle }}>
      {children}
    </AppContext.Provider>
  );
};

export const MyConsumer = AppContext.Consumer;
