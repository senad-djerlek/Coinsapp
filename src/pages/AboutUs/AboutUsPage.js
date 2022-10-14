import React from "react";
import UserCard from "../../components/UserCard/UserCard";

const AboutUsPage = () => {
  return (
    <div className="mt-24 mb-20 flex flex-row justify-evenly items-center min-h-[54vh]">
      <UserCard
        name="Aldin Halilovic"
        place="Novi Pazar, Serbia"
        description="Aldin is student of DUNP, and he work's in centar NIT"
        git="https://github.com/aldinhalilovic"
        gitimage="https://avatars.githubusercontent.com/u/100434492?v=4"
      />
      <UserCard
        name="Denis Mahmutovic"
        place="Novi Pazar, Serbia"
        description="Denis work's in night club and he work's in centar NIT"
        git="https://github.com/denismahmutovic"
        gitimage="https://avatars.githubusercontent.com/u/100436234?v=4"
      />
      <UserCard
        name="Imran Zukorlic"
        place="Novi Pazar, Serbia"
        description="Imran is student of Medresa, and he work's in centar NIT"
        git="https://github.com/imranzukorlic"
        gitimage="https://avatars.githubusercontent.com/u/100434307?v=4"
      />
      <UserCard
        name="Hamza Belovodjanin"
        place="Novi Pazar, Serbia"
        description="Hamza is student of UNINP and he work's in centar NIT"
        git="https://github.com/hamzabelovodjanin"
        gitimage="https://avatars.githubusercontent.com/u/100377045?v=4"
      />
    </div>
  );
};

export default AboutUsPage;
