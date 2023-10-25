import React, { createContext, useContext, useState } from "react";

const ValueContext = createContext();

function useContxtValues() {
  const context = useContext(ValueContext);
  if (!context) {
    throw new Error("useContxtValues must be used within an AuthProvider");
  }
  return context;
}

function ContextValues() {
  const [countDownState, setCountDownState] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  let name = "nelson";
  const value = {
    resetTimer,
    setResetTimer,
    countDownState,
    setCountDownState,
    name
  };
  return value;
}

function ValueProvider({ children }) {
  const contextValue = ContextValues(); // Call ContextValues to get the value
  return (
    <ValueContext.Provider value={contextValue}>
      {children}
    </ValueContext.Provider>
  );
}

export { ValueProvider, useContxtValues };
