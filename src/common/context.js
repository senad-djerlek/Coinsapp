import React, { createContext, useState } from "react";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [fav, setFav] = useState(false);

  const values = {
    search,
    setSearch,
    fav,
    setFav,
  };

  return <appContext.Provider value={values}>{children}</appContext.Provider>;
};

export { appContext, AppContextProvider };
