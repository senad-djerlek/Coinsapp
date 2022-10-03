import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import useDebouncer from "../../Hooks/useDebouncer";
import { useNavigate } from "react-router-dom";

function Search() {
  const [data, setData] = useState([]);
  const [search, setSrch] = useState("");

  const navigate = useNavigate();

  const debounceTerm = useDebouncer(search, 300);

  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
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
      console.log(response.data.data.coins);
      setData(response.data.data.coins);
      options.params.search = search;
      setData(response.data.data.coins);
      console.log(options);
    });
  };

  useEffect(() => getData(), [debounceTerm]);
  const price = data.map((el) => el.price);

  return (
    <div className="App">
      <br />
      <div>
        <img
          src="https://img.freepik.com/premium-vector/crypto-currency-horizontal-banner-bitcoin-digital-web-money-technology_48369-13318.jpg?w=2000"
          alt="logo"
        />
      </div>
      {data.slice(0, 10).map((el) => (
        <div key={el.uuid} onClick={() => navigate(`/${el.uuid}`)}>
          <div className="border-2 border-indigo-400  w-94 2 flex justify-around items-center rounded-md ml-10 mt-2 h-[80px]  overflow-hidden">
            <img src={el.iconUrl} width={50} />
            <div className="w-20">{el.name}</div>
            <div className="w-20">{el.price}</div>
            <div className="w-20">{el["24hVolume"]}</div>
            <div className="w-20">{el.marketCap}</div>
            <div>Grafikon</div>
            <button>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
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
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Search;

{
  /* <form>
        <input
          type={"text"}
          value={search}
          onChange={(e) => setSrch(e.target.value)}
        ></input>
      </form> */
}
