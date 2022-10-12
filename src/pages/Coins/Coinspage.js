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

  const { search, toggleFavoriteCoint, setSearch } = useContext(appContext);

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
    <div className=" flex flex-col justify-center min-h-[47.8vh] ">
      <form onSubmit={(e) => e.preventDefault()}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm ml-8 font-medium text-gray-900 sr-only dark:text-gray-300 "
        >
          Search
        </label>
        <div className=" relative z-10 flex justify-center items-center ">
          <div className="flex absolute inset-y-0  items-center pl-3 pointer-events-none justify-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="default-search"
            className="block p-4 pl-10  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-70 h-9 mt-3 z-40"
            placeholder="Search cryptos "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>{" "}
      {currentPosts.length === 0 ? (
        <div class="flex items-center justify-center ">
          <div role="status">
            <svg
              className="relavite  top-10 inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className=" w-10/12  h-[50px]flex flex-col justify-center ml-32 mt-10">
          <div className="flex justify-around items-center px-25 rounded-md ml-9 mt-2 mb-2 mr-10 h-[50px] overflow-hidden">
            <p>Rank</p>

            <div width={50} className="ml-8"></div>
            <div className="w-20">
              <p>Name</p>
            </div>
            <div className="w-20">
              <p className="">Price</p>
            </div>

            <div className="w-20">24hVolume</div>
            <div className="w-20">marketCap</div>
            <div className="w-36"></div>
            <div className="w-15"></div>
          </div>
          {currentPosts.slice(0, 15).map((el) => (
            <CardCoin
              uuid={el.uuid}
              rank={el.rank}
              iconUrl={el.iconUrl}
              name={el.name}
              price={el.price}
              hVolume={el["24hVolume"]}
              marketCap={el.marketCap}
              sparkline={el.sparkline.map((el) => el)}
              onClick={() => toggleFavoriteCoint(el)}
            />
          ))}
        </div>
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
