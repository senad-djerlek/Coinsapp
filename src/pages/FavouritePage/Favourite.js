import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../../common/context";

function Favourite() {
  const { favouriteCoins, toggleFavoriteCoint } = useContext(appContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col   items-center max-w-[100vw] min-h-[63vh] mt-10">
      {Object.keys(favouriteCoins).length === 0 ? (
        <div className=" min-h-[47.8vh] flex flex-col justify-center items-center">
          <img
            width={400}
            src="https://i.postimg.cc/rstHXmpL/No-data-pana.png"
            alt="photo"
          />
          <h1 className="mb-10">
            You haven't added any coin to your favourite list, please add some.
          </h1>
          <button
            onClick={() => navigate("/coins")}
            className="text-xl font-bold text-center  rounded-xl pb-12"
          >
            Go to coins
          </button>
        </div>
      ) : (
        Object.keys(favouriteCoins).map((key) => (
          <div
            key={favouriteCoins[key].uuid}
            className="flex flex-col  w-10/12"
          >
            <div className="w-94 h-[50px] ml-10 mr-10 mt-2 mb-2 flex justify-around items-center rounded-md">
              <img
                src={favouriteCoins[key].iconUrl}
                width={50}
                alt={favouriteCoins[key].name}
              />
              <div
                className="w-20"
                onClick={() => navigate(`/coins/${favouriteCoins[key].uuid}`)}
              >
                <p style={{ cursor: "pointer" }}>{favouriteCoins[key].name}</p>
              </div>
              <div className="w-20">
                <p className="font-bold text-sm">
                  ${Number(favouriteCoins[key].price).toLocaleString()}
                </p>
              </div>
              <div className="w-20 font-bold text-sm">
                ${Number(favouriteCoins[key]["24hVolume"]).toLocaleString()}
              </div>
              <div className="w-20 font-bold text-sm">
                ${Number(favouriteCoins[key].marketCap).toLocaleString()}
              </div>
              <button
                className="w-auto"
                onClick={() => toggleFavoriteCoint(favouriteCoins[key])}
              >
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
              </button>
            </div>
            <hr className="border-t-2 border-indigo-100 " />
          </div>
        ))
      )}
    </div>
  );
}

export default Favourite;
