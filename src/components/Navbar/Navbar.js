import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  let activeClassName =
    "block py-2 pr-4 pl-3 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  let dissclass =
    "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <div>
      <nav className="bg-blue-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900  sticky bottom-0 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto  ">
          <NavLink to={"/"}>
            <div className="flex">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Coins Logo"
              />
              <p className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ">
                Coins App
              </p>
            </div>
          </NavLink>
          <ul className="flex flex-col justify-center p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 w-1/2 ">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? activeClassName : dissclass
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/coins"}
                className={({ isActive }) =>
                  isActive ? activeClassName : dissclass
                }
              >
                Coins
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/exchanges"}
                className={({ isActive }) =>
                  isActive ? activeClassName : dissclass
                }
              >
                Exchanges
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? activeClassName : dissclass
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
          <div className="Search">
            <form>
              <label
                // for="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
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
                  type="search"
                  id="default-search"
                  className="block p-4 pl-10  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-70 h-9"
                  placeholder="Search "
                  required
                />
              </div>
            </form>{" "}
          </div>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="heart"
            className="w-5 text-red-500 absolute right-12"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
            ></path>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
