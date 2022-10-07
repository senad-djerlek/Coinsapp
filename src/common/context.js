import React, { createContext, useState } from "react";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [favouriteCoins, setFavouriteCoins] = useState({});

  const toggleFavoriteCoint = (coin) => {
    if (favouriteCoins[coin.uuid]) {
      setFavouriteCoins((_) => {
        const { [coin.uuid]: rmObj, ...rest } = favouriteCoins;
        return rest;
      });
      return;
    }
    setFavouriteCoins((prevState) => {
      return { ...prevState, [coin.uuid]: coin };
    });
  };

  const values = {
    search,
    setSearch,
    favouriteCoins,
    setFavouriteCoins,
    toggleFavoriteCoint,
  };

  return <appContext.Provider value={values}>{children}</appContext.Provider>;
};

export { appContext, AppContextProvider };
