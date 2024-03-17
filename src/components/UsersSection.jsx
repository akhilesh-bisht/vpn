import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { GrCreditCard } from "react-icons/gr";
const UsersSection = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="grid gap-16 px-10 py-10 rounded-2xl grid-cols-3 divide-x items-center shadow-xl shadow-gray-500/50 justify-center divide-gray-300">
        {/* User components */}
        <UserCard img={<FaUser className="text-red-600" />} />
        <UserCard
          img={<IoLocationSharp className="text-red-600 " />}
          user={30}
          text={"Location"}
        />
        <UserCard
          img={<GrCreditCard className="text-red-600 " />}
          user={50}
          text={"Servers"}
        />
      </div>
    </div>
  );
};

const UserCard = ({ img, user = 90, text = "user" }) => {
  return (
    <div className="flex items-center gap-5 justify-center">
      <div className="  h-9 w-9 sm:bg-orange-200 sm:rounded-[50%] flex justify-center items-center">
        {img}
      </div>
      <div>
        <p className="text-xl font-bold">{user}+</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default UsersSection;
