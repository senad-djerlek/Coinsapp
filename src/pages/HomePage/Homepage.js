import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import useDebounce from "../../Hooks/useDebounce";
import { appContext } from "../../common/context";
import CardCoin from "../../components/CardCoin/CardCoin";
import Search from "../../components/Search/Search";

function Homepage() {
  const [data, setData] = useState([]);

  const { search, toggleFavoriteCoint } = useContext(appContext);

  const debounceTerm = useDebounce(search, 150);

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
      setData(response.data.data.coins);
      options.params.search = search;
      setData(response.data.data.coins);
    });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getData(), [debounceTerm]);

  return (
    <div className="max-w-screen flex flex-col items-center">
      <div>
        <img
          className="w-screen h-[60vh]"
          src="https://cryptorecaps.com/psoothof/2022/01/Crypto-1.jpg?fbclid=IwAR3_FxZSYGasypCKN7pfk7QSaWwApo3WZVbMDIBPzhSFvaO7TSSCwc_WNHA"
          alt="logo"
        />
      </div>

      <Search />

      <div className="w-10/12">
        <h1 className="text-xl font-bold">
          # Top 10 <span className="text-red-500">List</span>{" "}
        </h1>
        <div className="flex justify-around items-center rounded-md mt-2 mb-2 h-[50px] overflow-hidden">
          <p className="w-5">Rank</p>
          <div className="w-14"></div>
          <div className="w-20 mr-3">Name</div>
          <div className="w-20 pl-2">
            <p className="font-bold text-sm">Price </p>
          </div>
          <div className="w-20 font-bold text-sm pl-2">24hVolume</div>
          <div className="w-20 font-bold text-sm pl-7">marketCap</div>
          <div className="w-32"></div>
          <div className="w-20"></div>
          <div className="w-5"></div>
        </div>
        {data.map((el) => (
          <CardCoin
            key={el.uuid}
            uuid={el.uuid}
            rank={el.rank}
            iconUrl={el.iconUrl}
            name={el.name}
            price={el.price}
            hVolume={el["24hVolume"]}
            marketCap={el.marketCap}
            sparkline={el.sparkline.map((el) => el)}
            onClick={() => toggleFavoriteCoint(el)}
            coinData={el}
          />
        ))}
      </div>
      <hr className="border-t-1 border-indigo-200" />
    </div>
  );
}

export default Homepage;
