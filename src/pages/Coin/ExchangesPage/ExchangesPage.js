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
      setExchanges(response.data.data.exchanges);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getExachange();
  }, []);

  return (
    <>
      {exchanges.map((exchange) => (
        <div key={exchange.uuid}>
          <div className="border-2 border-indigo-400   flex justify-around items-center rounded-md ml-10 mt-2 mb-2 h-[80px]  overflow-hidden font-mono mr-10">
            <img width={50} src={exchange.iconUrl} alt="icon"></img>
            <div className="w-32">{exchange.name}</div>
            <div className="w-20">{exchange.price}$</div>
            <div className="w-20">Rank: {exchange.rank}</div>
            <div className="w-36">
              <div className="flex h-12 w-34 bg-indigo-200 justify-center items-center rounded-lg transition ease-in-out duration-250 hover:bg-sky-700 hover:text-white ">
                <a
                  href={exchange.coinrankingUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Open Exchange
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
