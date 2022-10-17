import React from "react";
import ProfileModal from "../../components/ProfileModal/ProfileModal";

export default function Profile() {
  return (
    <div className="min-h-[20vh] max-w-[80vw] flex justify-center items-center ml-10">
      <div className="flex flex-col">
        <div className="mb-10">
          <h1 className=" text-6xl  ">
            But Bitcoin <br /> & Crypto
          </h1>
          <h3 className="mt-3 text-2xl font-serif ">
            Sign up today and <span className="text-red-500">buy 50+</span>{" "}
            <br /> cryptotocurrencies in minutes <br />
            Get started with as little as{" "}
            <span className="text-bold text-red-500">$10</span>
          </h3>
        </div>
        <ProfileModal />
      </div>
      <div>
        <img
          src="https://i.postimg.cc/wjZfpsYF/Crypto-portfolio-rafiki.png"
          alt="name"
        />
      </div>
    </div>
  );
}
