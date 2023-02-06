import React from "react";
import { FiMenu } from "react-icons/fi";
import Profile from "./profile";
const Topbar = () => {
  return (
    <div class="flex justify-between px-3 items-center">
      <div class="text-md md:text-xl flex py-5 items-center">
        <a class="flex title-font font-medium items-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-8 h-8 md:w-10 md:h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3">Tailblocks</span>
        </a>
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
};

export default Topbar;
