import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../../common/context";

function Favourite() {
  const { favouriteCoins } = useContext(appContext);
  const navigate = useNavigate();
  console.log(favouriteCoins);
  return (
    <div className="flex flex-col min-h-[47.8vh]">
      {Object.keys(favouriteCoins).length === 0 ? (
        <div className=" min-h-[47.8vh] flex flex-col justify-center items-center">
          <h1 className="mb-10">
            You haven't added any coin to your favourite list, please add some.
          </h1>
          <button
            onClick={() => navigate("/coins")}
            className="text-xl font-bold text-center  rounded-xl"
          >
            Go to coins
          </button>
        </div>
      ) : (
        Object.keys(favouriteCoins).map((key) => (
          <div key={favouriteCoins[key].uuid} className="flex flex-col">
            <div className="  w-94 2 flex justify-around items-center rounded-md ml-10 mr-10 mt-2 mb-2 h-[50px]  overflow-hidden">
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
            </div>
            <hr className="border-t-2 border-indigo-200 " />
          </div>
        ))
      )}
      {}
    </div>
  );
}

export default Favourite;
