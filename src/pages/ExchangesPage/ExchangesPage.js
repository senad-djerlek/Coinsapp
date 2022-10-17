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
    <div className=" flex flex-col justify-center min-h-[60vh]">
      {currentPosts.length === 0 ? (
        <div className="flex items-center justify-center">
          <div role="status">
            <svg
              className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="w-10/12  h-[50px]flex flex-col justify-center ml-32 mt-10">
          {currentPosts.slice(0, 15).map((exchange) => (
            <div key={exchange.uuid}>
              <div className=" flex justify-around items-center px-25 rounded-md ml-9 mt-2 mb-2 mr-10 h-[50px]  overflow-hidden">
                <div className="">
                  <img
                    width={50}
                    src={exchange.iconUrl}
                    alt={exchange.name}
                  ></img>
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
        </div>
      )}

      <Pages
        totalPosts={exchanges.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
