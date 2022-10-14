import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [favouriteCoins, setFavouriteCoins] = useState({});
  const [modalData, setModalData] = useState([]);
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

    toast("You have added coin to your favourite page", { icon: "❤️" });
  };

  const getModalData = () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "20",
        offset: "0",
        search: "",
        uuid: "razxDUgYGNAdQ",
      },
      headers: {
        "X-RapidAPI-Key": "4f0338cc68mshdb53cc86cfb2e35p19f053jsn63ffee5719a2",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    const getData = () => {
      axios.request(options).then(function (response) {
        setModalData(response.data.data.coins);
      });
    };

    return getData();
  };

  useEffect(() => getModalData(), []);

  const values = {
    search,
    setSearch,
    favouriteCoins,
    setFavouriteCoins,
    toggleFavoriteCoint,
    modalData,
    getModalData,
  };

  return <appContext.Provider value={values}>{children}</appContext.Provider>;
};

export { appContext, AppContextProvider };
