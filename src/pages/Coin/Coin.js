import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined";
import WaterOutlinedIcon from "@mui/icons-material/WaterOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import LinkIcon from "@mui/icons-material/Link";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import GitHubIcon from "@mui/icons-material/GitHub";
import RedditIcon from "@mui/icons-material/Reddit";
import TelegramIcon from "@mui/icons-material/Telegram";
import EventNoteIcon from "@mui/icons-material/EventNote";

import SearchIcon from "@mui/icons-material/Search";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

function Coin() {
  const [coin, setCoin] = useState();
  const { uuid } = useParams();
  const link = coin?.links?.map((el) => el.type);
  const name = coin?.links?.map((el) => el.name);

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
    <div className="ml-11 mt-5 mr-20 ">
      <div className="flex items-center justify-around w-2/5 mt-4 mb-5">
        <div className="flex   items-center ">
          <p className="flex justify-start">{coin?.rank}</p>
          <img className=" ml-3" src={coin?.iconUrl} alt="icon" width={38} />
          <p className="ml-3 font-bold">{coin?.name}</p>

          <p className="ml-3"> {coin?.symbol}</p>
          <p className="ml-3 font-bold  ">
            ${Number(coin?.price).toLocaleString()}
          </p>
        </div>

        <div className="text-blue-500 ">
          <div className=" absolute right-16 ">
            <NavLink to={"/"} className="m-4">
              Home
            </NavLink>
            <NavLink className="m-4" to={"/exchanges"}>
              Exchanges
            </NavLink>
            <SearchIcon />
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-indigo-200" />

      <div className="flex items-center justify-around mt-10  ">
        <h3 className="font-bold mb-2 ">Price chart </h3>
        <p>
          24h <span className="text-green-500"> {coin?.change} %</span>
        </p>
        <p>
          {" "}
          High <span className="font-bold">${coin?.supply?.max}</span>{" "}
        </p>
      </div>
      <hr className="border-t-2 border-indigo-200 " />
      <div className="mt-10 mb-12 max-w-screen">
        <Sparklines data={coin?.sparkline.map((el) => el)}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </div>
      <div className="flex max-w-screen">
        <div className="mt-2">
          <div className="ml-4  text-3xl text-center ">Value statistics</div>
          <div>
            <p className="ml-4 text-zinc-600 mt-5">
              An overview showing the statistics of Bitcoin, such as the base
              and quote currency <br></br>the rank, and trading volume.
            </p>
          </div>

          <div className="flex items-center justify-around  mt-9  ">
            <div className="w-20 flex justify-center items-center">
              <PaidOutlinedIcon fontSize="large" color="primary" />
            </div>
            <h1 className="w-28">Price to EUR</h1>
            <h3 className="font-bold w-40"> {coin?.price}</h3>
          </div>
          <hr
            className="border-t-2 border-indigo-200
          "
          />
          <div className="flex items-center justify-around mt-9">
            <div className="w-20 flex justify-center items-center">
              <CurrencyBitcoinOutlinedIcon fontSize="large" color="primary" />
            </div>
            <h1 className="w-28">Price to BTC</h1>
            <h3 className="font-bold w-40">
              $ {coin?.priceAt} {coin?.symbol}
            </h3>
          </div>
          <hr className="border-t-2 border-indigo-300" />

          <div className="flex items-center justify-around mt-9">
            <div className="w-20 flex justify-center items-center">
              <BarChartOutlinedIcon fontSize="large" color="primary" />
            </div>
            <h1 className="w-28">Rank</h1>
            <h3 className="font-bold w-40"> # {coin?.rank}</h3>
          </div>
          <hr className="border-t-2 border-indigo-300" />
          <div className="flex items-center justify-around w-3/2 mt-9">
            <div className="w-20 flex justify-center items-center">
              <EggOutlinedIcon fontSize="large" color="primary" />
            </div>
            <h1 className="w-28">24h volume</h1>
            <h3 className="font-bold w-40">
              {" "}
              ${Number(coin?.price).toLocaleString()}
            </h3>
          </div>
          <hr className="border-t-2 border-indigo-300" />
          <div className="flex items-center justify-around mt-9 ">
            <div className="w-20 flex justify-center items-center">
              <WaterOutlinedIcon fontSize="large" color="primary" />
            </div>
            <h1 className="w-28">Market cap</h1>
            <h3 className="font-bold w-40">${coin?.supply.supplyAt}</h3>
          </div>
          <hr className="border-t-2 border-indigo-300" />
          <div className="flex items-center justify-around mt-9">
            <div className="w-20 flex justify-center items-center ">
              <WaterOutlinedIcon fontSize="large" color="primary" />
            </div>
            <h1 className="w-28 ">Fully diluted market cap</h1>
            <h3 className="font-bold w-40 ">${coin?.supply.circulating}</h3>
          </div>
          <hr className="border-t-2 border-indigo-300" />
          <div className="flex items-center justify-around mt-9">
            <div className="w-20 flex justify-center items-center ">
              <BeenhereOutlinedIcon fontSize="large" color="primary" />
            </div>
            <hr />
            <h1 className="w-28 ">All-time high (daily avg.)</h1>
            <h3 className="w-40 mr-3">
              ${Number(coin?.supply.total).toLocaleString()}
            </h3>
          </div>
          <hr className="border-t-2 border-indigo-300" />
        </div>

        <div className="ml-12">
          <h1 className="flex items-center justify-center font-serif  text-3xl">
            Supply information
          </h1>
          <p className="ml-12 mt-8 text-zinc-600 ">
            View the total and circulating supply of Bitcoin, including details
            on how the supplies are calculated.
          </p>
          <div
            style={{
              background: "#f1f6ff",
            }}
            className="w-94 mr- rounded h-2/3 ml-9 mt-20   "
          >
            <div className="flex items-center justify-center ">
              <svg
                className="h-10 w-8 text-green-500 flex justify-around mt-7 ml-10"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="12" r="9" /> <path d="M9 12l2 2l4 -4" />
              </svg>
              <h2 className="text-green-500 mt-9    ">Verified supplys</h2>
            </div>
            <div className="ml-3 mt-4  ">
              <p>Updated 2 minutes ago</p>
              <hr />
              <p className="mt-8 flex justify-between">
                Total supply{" "}
                <span className="mr-5 font-bold">
                  {" "}
                  $ {coin?.supply.circulating}
                </span>
              </p>
              <hr />
              <p className="mt-11 flex justify-between">
                Max supply{" "}
                <span className=" mr-3 font-bold">$ {coin?.supply.max}</span>{" "}
              </p>
              <hr />
              <p className="mt-11 flex justify-between">
                Total supply
                <span className=" mr-4 font-bold">
                  $ {coin?.supply.total}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen flex  ">
        <div className="w-5/12">
          <h1 className="mt-9 text-center font-bold">What is {coin?.name}</h1>

          <div
            // style={{
            //   color: `${coin?.color}`,
            // }}
            className="px-3 pt-3 border border-indigo-600 rounded text-sm ml-3 mb-10 font-serif m"
            dangerouslySetInnerHTML={{ __html: coin?.description }}
          />
        </div>
        <div className="w-1/2 ml-10 mt-14">
          <h1 className="ml-3 font-bold">Links</h1>
          <div className="">
            <div className="flex  justify-between w-41">
              <div className="flex items-center w-32 justify-evenly font-bold">
                <div className="w-10">
                  <LinkIcon fontSize="large" color="primary" />
                </div>
                <p className="">{link?.slice(0, 1)}</p>
              </div>
              <p className="">{name?.slice(0, 1)}</p>
            </div>
            <hr className="border-t-2 border-indigo-100" />
            <div className="flex justify-between items-center mt-4 w-41 ">
              <div className="flex items-center  w-32 justify-evenly font-bold">
                <div className="w-10 ">
                  <LinkIcon fontSize="large" color="primary" />
                </div>
                <p>{link?.slice(1, 2)}</p>
              </div>
              <p>{name?.slice(1, 2)}</p>
            </div>
            <hr className="border-t-2 border-indigo-100" />
            <div className="flex justify-between items-center mt-4 w-41 ">
              <div className="flex items-center  w-32 justify-evenly font-bold">
                <div className="w-10 ml-2">
                  <CurrencyBitcoinOutlinedIcon
                    fontSize="large"
                    color="primary"
                  />
                </div>
                <p>{link?.slice(2, 3)}</p>
              </div>
              <p>{name?.slice(2, 3)}</p>
            </div>
            <hr className="border-t-2 border-indigo-100" />
            <div className="flex justify-between items-center mt-4 w-41 ">
              <div className="flex items-center  w-32 justify-evenly font-bold">
                <CurrencyExchangeIcon fontSize="large" color="primary" />
                <p>{link?.slice(3, 4)}</p>
              </div>
              <p>{name?.slice(3, 4)}</p>
            </div>
            <hr className="border-t-2 border-indigo-100" />
            <div className="flex justify-between items-center mt-4 w-41 ">
              <div className="flex items-center  w-32 justify-evenly font-bold ">
                <div className="w-10 -ml-2">
                  <GitHubIcon fontSize="large" color="primary" />
                </div>
                <p>{link?.slice(4, 5)}</p>
              </div>
              <p>{name?.slice(4, 5)}</p>
            </div>
            <hr className="border-t-2 border-indigo-100" />

            <div className="flex justify-between items-center mt-4 w-41 ">
              <div className="flex items-center  w-32 justify-evenly font-bold">
                <div className="w-10 -ml-2">
                  <RedditIcon fontSize="large" color="primary" />
                </div>{" "}
                <p>{link?.slice(5, 6)}</p>
              </div>
              <p>{name?.slice(5, 6)}</p>
            </div>
            <hr className="border-t-2 border-indigo-100" />
            <div className="flex justify-between items-center mt-4 w-41 ">
              <div className="flex items-center  w-32 justify-evenly font-bold">
                <div className="w-10 -ml-2">
                  <TelegramIcon fontSize="large" color="primary" />
                </div>{" "}
                <p>{link?.slice(6, 7)}</p>
              </div>
              <p>{name?.slice(6, 7)}</p>
            </div>
            <hr className="border-t-2 border-indigo-200" />
            <div className="flex justify-between items-center mt-4 w-41 ">
              <div className="flex items-center  w-32 justify-evenly font-bold">
                <div className="w-10">
                  <EventNoteIcon fontSize="large" color="primary" />
                </div>
                <p>{link?.slice(8, 9)}</p>
              </div>
              <p>{name?.slice(8, 9)}</p>
            </div>
            <hr className="border-t-2 border-indigo-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coin;
