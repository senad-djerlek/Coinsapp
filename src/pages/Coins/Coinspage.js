import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import useDebounce from "../../Hooks/useDebounce";
import { appContext } from "../../common/context";
import Pages from "../../components/Pagination/Pagination";
import CardCoin from "../../components/CardCoin/CardCoin";

function Coinspage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  const { search, toggleFavoriteCoint } = useContext(appContext);

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
      limit: "100",
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

  useEffect(() => getData(), [debounceTerm]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="w-full flex flex-col justify-center min-h-[47.8vh]">
      {currentPosts.length === 0 ? (
        <div className="flex items-center justify-center">
          <h1>Loading...</h1>
        </div>
      ) : (
        currentPosts
          .slice(0, 15)
          .map((el) => (
            <CardCoin
              uuid={el.uuid}
              rank={el.rank}
              iconUrl={el.iconUrl}
              name={el.name}
              price={el.price}
              hVolume={el["24hVolume"]}
              marketCap={el.marketCap}
              onClick={() => toggleFavoriteCoint(el)}
            />
          ))
      )}

      <Pages
        totalPosts={data.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Coinspage;
