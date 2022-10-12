import React from "react";
import UserCard from "./UserCard/UserCard";
import CalcModal from "../../components/CalcModal/CalcModal";

const AboutUsPage = () => {
  return (
    <div className="mt-24 mb-20 flex flex-row justify-evenly items-center">
      <UserCard
        name="Aldin Halilovic"
        place="Novi Pazar, Serbia"
        description="Aldin is student on DUNP and hi work in centar NIT"
        git="https://github.com/aldinhalilovic"
        gitimage="https://avatars.githubusercontent.com/u/100434492?v=4"
      />
      <UserCard
        name="Denis Mahmutovic"
        place="Novi Pazar, Serbia"
        description="Denis work in night club and hi work in centar NIT"
        git="https://github.com/denismahmutovic"
        gitimage="https://avatars.githubusercontent.com/u/100436234?v=4"
      />
      <UserCard
        name="Imran Zukorlic"
        place="Novi Pazar, Serbia"
        description="Imran is student in Medresa and hi work in centar NIT"
        git="https://github.com/imranzukorlic"
        gitimage="https://avatars.githubusercontent.com/u/100434307?v=4"
      />
      <UserCard
        name="Hamza Belovodjanin"
        place="Novi Pazar, Serbia"
        description="Hamza is student on UNINP and hi work in centar NIT"
        git="https://github.com/hamzabelovodjanin"
        gitimage="https://avatars.githubusercontent.com/u/100377045?v=4"
      />
    </div>
  );
};

export default AboutUsPage;
