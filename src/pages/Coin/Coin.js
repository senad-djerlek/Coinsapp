import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Coin() {
  const [coin, setCoin] = useState();
  const { uuid } = useParams();

  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${uuid}`,
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
    headers: {
      "X-RapidAPI-Key": "4f0338cc68mshdb53cc86cfb2e35p19f053jsn63ffee5719a2",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  const getData = () => {
    axios.request(options).then(function (response) {
      console.log(response.data.data.coin);
      setCoin(response.data.data.coin);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="mt-9" />
      <div className="flex ml-2 mt-3">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Coins Logo"
        />
        <h1>crypto List</h1>
      </div>
      <hr />
      <div className="flex mt-2  items-center p-4 ml-2 justify-around">
        <img src={coin?.iconUrl} width={30} />
        <p className="mr-13">{coin?.name}</p>
        <p>{coin?.symbol}</p>
        <p className="border-x-4 border-grey-300"> # {coin?.rank}</p>
        <p>
          $ {coin?.price}{" "}
          <span className="border-2 border-grey-200 font-serif">Live</span>
        </p>
      </div>
      <hr />
      <div className="flex items-center justify-around mt-10 ">
        <h3>Price chart </h3>
        <p>24h{coin?.change} %</p>
        <p>High {coin?.supply?.max} </p>
      </div>
      <hr />
      <div className="mt-4/2 mb-12">
        <img src=" https://i.im.ge/2022/10/03/1VTQ2y.Screenshot-2022-10-03-at-15-54-47.png" />
      </div>
      <div className="flex">
        <div>
          <div className="ml-4 text-lg">Value statistics</div>
          <div>
            <p className="ml-4 text-indigo-500">
              An overview showing the statistics of Bitcoin, such as the base
              and quote currency <br></br>the rank, and trading volume.
            </p>
          </div>

          <div className="flex items-center justify-around ">
            <svg
              class="h-10 w-5 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
            <h1>Price to EUR</h1>
            <h3>{coin?.price}</h3>
          </div>
          <hr />
          <div className="flex items-center justify-around">
            <svg
              class="h-10 w-5 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
            <h1>Price to BTC</h1>
            <h3>{coin?.price}</h3>
          </div>
          <hr />
          <div className="flex items-center justify-around">
            <svg
              class="h-10 w-5 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
            <h1>Rank</h1>
            <h3>{coin?.price}</h3>
          </div>
          <hr />
          <div className="flex items-center justify-around">
            <svg
              class="h-10 w-5 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
            <h1>24h volume</h1>
            <h3>{coin?.price}</h3>
          </div>
          <hr />
          <div className="flex items-center justify-around">
            <svg
              class="h-10 w-5 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
            <h1>Market cap</h1>
            <h3>{coin?.price}</h3>
          </div>
          <hr />
          <div className="flex items-center justify-around">
            <svg
              class="h-10 w-5 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
            <h1>Fully diluted market cap</h1>
            <h3>{coin?.price}</h3>
          </div>
          <hr />
          <div className="flex items-center justify-around">
            <svg
              class="h-10 w-5 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
            <hr />
            <h1>All-time high (daily avg.)</h1>
            <h3>{coin?.price}</h3>
          </div>
        </div>
        <div className="ml-8">
          <h1 className="flex items-center justify-center">
            Supply information
          </h1>
          <p className="ml-12">
            View the total and circulating supply of Bitcoin, including details
            on how the supplies are calculated.
          </p>
          <div
            style={{
              background: "#f1f6ff",
            }}
            className="w-2/3 rounded h-80 ml-9   "
          >
            <div className="flex ">
              <svg
                className="h-10 w-10 text-green-500 flex justify-around mt-7 ml-10"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="12" r="9" /> <path d="M9 12l2 2l4 -4" />
              </svg>
              <h2 className="text-green-500 mt-7">Verified supplys</h2>
            </div>
            <div className="ml-3 ">
              <p>Updated 2 minutes ago</p>
              <hr />
              <p className="mt-8">Total supply</p>
              <hr />
              <p className="mt-4">Max supply </p>
              <hr />
              <p className="mt-4">Total supply</p>
              <hr />
              <p className="mt-4">Issuance blockchain</p>
            </div>
          </div>
        </div>
      </div>
      <h1>What is Bitcoin</h1>
      <div dangerouslySetInnerHTML={{ __html: coin?.description }} />
    </div>
  );
}

export default Coin;
