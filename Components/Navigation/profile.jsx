import React from "react";
import { FaUserAlt } from "react-icons/fa";
const profile = () => {
  return (
    <div className="flex text-md md:text-xl items-center gap-2 hover:text-blue-600">
      <FaUserAlt />
      <div>Login</div>
    </div>
  );
};

export default profile;
