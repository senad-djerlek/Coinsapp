import React from "react";
import ProfileModal from "../../components/ProfileModal/ProfileModal";

export default function Profile() {
  return (
    <div className="min-h-[20vh] max-w-[80vw] flex justify-center items-center">
      <img
        src="https://i.postimg.cc/wjZfpsYF/Crypto-portfolio-rafiki.png"
        alt="photo"
      />

      <ProfileModal />
    </div>
  );
}
