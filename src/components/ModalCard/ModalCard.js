import React, { useContext, useState } from "react";
import { appContext } from "../../common/context";

function ModalCard({ el }) {
  const [coinAdded, setCoinAdded] = useState(false);
  const { toggleProfileCoin } = useContext(appContext);
  return (
    <div className="flex">
      <div className="w-20 h-24  flex justify-center items-center">
        <div>{el.rank}</div>
      </div>
      <div className="w-60 h-24  flex flex-col justify-center items-center">
        <img src={el.iconUrl} width={40} alt={el.name} />
        <h1>{el.name}</h1>
        <hr />
      </div>
      <div className="w-60 h-24  flex justify-center items-center">
        <h1>${Number(el.price).toLocaleString()}</h1>
      </div>
      <div className="w-60 h-24  flex justify-center items-center">
        <h1 className="flex justify-center items-center">
          ${Number(el.marketCap).toLocaleString()}
        </h1>
      </div>
      <div className="w-60 h-24  flex justify-center items-center">
        <div>
          {!coinAdded ? (
            <div>
              <input
                type="checkbox"
                onChange={() => {
                  setCoinAdded(true);
                  toggleProfileCoin(el);
                }}
                className="w-5 h-5"
              />
            </div>
          ) : (
            <div>
              <input
                type="checkbox"
                onChange={() => {
                  setCoinAdded(false);
                  toggleProfileCoin(el);
                }}
                checked
                className="w-5 h-5"
              />
            </div>
          )}
        </div>
      </div>
      <div className="w-60 h-24 flex justify-center items-center ">
        {coinAdded ? (
          <div>
            <input
              type={"number"}
              className="p-5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-24 h-5 z-40"
            />
          </div>
        ) : (
          <div>
            <input
              type={"number"}
              readOnly
              className="p-5 focus-visible:none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-24 h-5 z-40"
            />
          </div>
        )}
      </div>
      <hr />
    </div>
  );
}

export default ModalCard;
