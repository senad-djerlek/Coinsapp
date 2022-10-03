import React, { createContext, useState } from "react";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const values = {
    search,
    setSearch,
  };

  return (
    // the Provider gives access to the context to its children
    <appContext.Provider value={values}>{children}</appContext.Provider>
  );
};

export { appContext, AppContextProvider };
