import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-200 border-gray-200  text-center">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-3xl space-y-6">
            <nav className="rounded-3xl border-4 border-gray-900 p-6">
              <ul className="flex flex-wrap justify-center gap-6 text-sm font-bold">
                <li>
                  <a
                    className="text-gray-900 transition hover:text-gray-900/75"
                    href="/"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-900 transition hover:text-gray-900/75"
                    href="/about"
                    rel="noreferrer"
                  >
                    Users
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-900 transition hover:text-gray-900/75"
                    href="/coins"
                    rel="noreferrer"
                  >
                    Coins
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-900 transition hover:text-gray-900/75"
                    href="/exchanges"
                    rel="noreferrer"
                  >
                    Exchanges
                  </a>
                </li>
              </ul>
            </nav>

            <p className="mx-auto max-w-lg text-xs text-gray-700">
              Crypto app made by: Denis Mahmutovic, Aldin Halilovic, Hamza
              Belovodjanin, Imran Zukorlic;
              <span className="mt-4 block"> &copy; 2022 Crypto App </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
