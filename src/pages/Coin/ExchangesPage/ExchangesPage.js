import React, { useState } from "react";

export default function Exchanges() {
  const [exchanges, setExchanges] = useState([]);

  const axios = require("axios");

  const getExachange = async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        limit: "50",
        offset: "0",
        orderBy: "24hVolume",
        orderDirection: "desc",
      },
      headers: {
        "X-RapidAPI-Key": "96befbedb8msh6ee7fb0bc25ed15p1a4552jsn980737f8ec44",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data.data.exchanges);
      setExchanges(response.data.data.exchanges);
    } catch (error) {
      console.log(error);
    }
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    //   setCoin(response.data);
    // })
    // .catch(function (error) {
    //   console.error(error);
    // });
  };

  React.useEffect(() => {
    getExachange();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {exchanges.map((exchange) => (
        <div className="flex flex-row w-5/6 h-16 justify-between items-center border-4 my-3 p-3 border-indigo-400 rounded-md">
          <img className=" w-6 h-6" src={exchange.iconUrl} alt="icon"></img>
          <h3>{exchange.name}</h3>
          <h3>Price: {exchange.price}</h3>
          <h3>Rank: {exchange.rank}</h3>
          <a href={exchange.coinrankingUrl} rel="noreferrer" target="_blank">
            Open Exchange
          </a>
        </div>
      ))}
    </div>
  );
}
