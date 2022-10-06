import React, { useContext } from "react";
import { appContext } from "../../common/context";

function Favourite() {
  const { favouriteCoins } = useContext(appContext);
  console.log(favouriteCoins);
  return (
    <div className="flex flex-col">
      {Object.keys(favouriteCoins).map((key) => (
        <div key={favouriteCoins[key].uuid} className="flex flex-col">
          <h1>{favouriteCoins[key].name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Favourite;
