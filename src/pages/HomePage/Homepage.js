import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import useDebounce from "../../Hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { appContext } from "../../common/context";

function Homepage() {
  const [data, setData] = useState([]);
  const { search, favouriteCoins, toggleFavoriteCoint } =
    useContext(appContext);
  const navigate = useNavigate();

  const debounceTerm = useDebounce(search, 200);

  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "10",
      offset: "0",
      search: search,
      uuid: "razxDUgYGNAdQ",
    },
    headers: {
      "X-RapidAPI-Key": "4f0338cc68mshdb53cc86cfb2e35p19f053jsn63ffee5719a2",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const getData = () => {
    axios.request(options).then(function (response) {
      // console.log(response.data.data.coins);
      setData(response.data.data.coins);
      options.params.search = search;
      setData(response.data.data.coins);
      // console.log(options);
      // console.log(fav);
    });
  };

  useEffect(() => getData(), [debounceTerm]);

  // console.log(data.length && Number(data[0].price).toFixed(2));

  return (
    <div
      className="max-w-screen flex flex-col items-center
    "
    >
      <div>
        <img
          className="w-screen h-96"
          src="https://hedextrade.com/images/home-pages/btc_bg-4.jpg"
          alt="logo"
        />
      </div>

      <div className="w-10/12">
        <div className=" flex justify-around items-center rounded-md mt-2 mb-2  h-[50px] overflow-hidden">
          <p>Rank</p>

          <div width={50} className="ml-8"></div>
          <div className="w-20">
            <p>Name</p>
          </div>
          <div className="w-20">
            <p className="">Price</p>
          </div>
          <div className="w-20 ">24hVolume</div>
          <div className="w-20 ml-6">marketCap</div>
          <div className="w-36"></div>
          <div className="w-15"></div>
        </div>
      </div>
      <hr className="border-t-1 border-indigo-200 " />
      {data.map((el) => (
        <div key={el.uuid} className="w-10/12">
          <div
            key={el.uuid}
            className="flex justify-around items-center rounded-md mt-2 mb-2 h-[50px] overflow-hidden"
          >
            <p className="w-5">{el?.rank}</p>
            <img
              src={el.iconUrl}
              width={50}
              alt={el.name}
              onClick={() => navigate(`/coins/${el.uuid}`)}
              className="cursor-pointer"
            />
            <div
              className="w-20 cursor-pointer"
              onClick={() => navigate(`/coins/${el.uuid}`)}
            >
              <p>{el.name}</p>
            </div>
            <div className="w-20">
              <p className="font-bold text-sm">
                ${Number(el.price).toLocaleString()}
                {/* {Number(el.price).toFixed(4)} */}
              </p>
            </div>
            <div className="w-20 font-bold text-sm ">
              ${Number(el["24hVolume"]).toLocaleString()}
            </div>
            <div className="w-20 font-bold text-sm ml-5">
              ${Number(el.marketCap).toLocaleString()}
            </div>
            <img
              src="https://static.coinstats.app/sparks/bitcoin_1w.png"
              alt="icon"
            />
            <button
              onClick={() => {
                toggleFavoriteCoint(el);
              }}
            >
              {!favouriteCoins[el.uuid] ? (
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="heart"
                  className="w-5 text-red-500"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                  ></path>
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="heart"
                  className="w-5 text-red-500"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <hr className="border-t-1 border-indigo-200" />
        </div>
      ))}
    </div>
  );
}

export default Homepage;
