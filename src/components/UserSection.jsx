// UsersSection.js
import React from "react";

const UsersSection = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="grid gap-16 px-10 py-10 rounded-2xl grid-cols-3 divide-x items-center shadow-xl shadow-gray-500/50 justify-center divide-gray-300">
        {/* User components */}
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

const UserCard = () => {
  return (
    <div className="flex items-center gap-5 justify-center">
      <img src="user.svg" alt="user" />
      <div>
        <p className="text-xl font-semibold">90+</p>
        <p>User</p>
      </div>
    </div>
  );
};

export default UsersSection;
