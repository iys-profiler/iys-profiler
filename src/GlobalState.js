import React, { useState } from 'react';

const GlobalContext = React.createContext();

export function GlobalStateProvider(props) {
  const [globalVariable, setGlobalVariable] = useState('');

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
