import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const NavBar = () => {
  const navigate = useNavigate();

  let activeClassName =
    "block py-2 pr-4 pl-3 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  let dissclass =
    "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <div className="sticky top-0 z-20 max-w-screen">
      <nav className=" bg-blue-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 sticky bottom-0   ">
        <div className="container flex flex-wrap justify-between items-center pl-[220px]">
          <div
            className="flex"
            style={{
              pointerEvents: "none",
            }}
          >
            <img
              width={40}
              src="https://i.postimg.cc/8P0LjnXR/logo-removebg-preview.png"
              className="mr-3 h-6 sm:h-9"
              alt="Coins Logo"
            />
            <p className="self-center text-xl font-mono font-semibold whitespace-nowrap dark:text-white ">
              CRYPTO-NIT
            </p>
          </div>
          <ul className="flex flex-col justify-center p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 w-1/2 mr-64 ">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? activeClassName : dissclass
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/coins"
                className={({ isActive }) =>
                  isActive ? activeClassName : dissclass
                }
              >
                Coins
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/exchanges"
                className={({ isActive }) =>
                  isActive ? activeClassName : dissclass
                }
              >
                Exchanges
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClassName : dissclass
                }
              >
                About Us
              </NavLink>
            </li>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="heart"
              className="w-5 text-red-500  cursor-pointer"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => navigate("/favourite")}
            >
              <path
                fill="currentColor"
                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
              ></path>
            </svg>
          </ul>
          <PersonPinIcon className="" onClick={() => navigate("/profile")} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
