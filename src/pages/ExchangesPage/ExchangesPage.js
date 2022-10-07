import React, { useState } from "react";
import Pages from "../../components/Pagination/Pagination";

export default function Exchanges() {
  const [exchanges, setExchanges] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  const axios = require("axios");

  const getExachange = async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        limit: "100",
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
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = exchanges.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {currentPosts.slice(0, 15).map((exchange) => (
        <div key={exchange.uuid}>
          <div className="flex justify-around items-center px-25 rounded-md ml-9 mt-2 mb-2 mr-10 h-[50px]  overflow-hidden">
            <div className="w-32">
              <img width={50} src={exchange.iconUrl} alt={exchange.name}></img>
            </div>
            <p>#{exchange.rank}</p>
            <div className="w-32">
              <p>{exchange.name}</p>
            </div>
            <div className="w-32">
              <p className="font-bold text-sm">
                $ {Number(exchange.price).toLocaleString()}
              </p>
            </div>
            <div className="w-36">
              <div className="flex h-12 w-34 bg-indigo-100 justify-center items-center rounded-2xl rounded-br-none transition ease-in-out duration-250 hover:bg-indigo-700 hover:text-white hover:drop-shadow-2xl hover:rounded-br-2xl ">
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
          <hr className="border-t-1 border-indigo-200" />
        </div>
      ))}
      <Pages
        totalPosts={exchanges.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
