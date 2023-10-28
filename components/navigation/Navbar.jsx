"use client";
import { Box, Tabs, Tab } from "@mui/system";

import { useState } from "react";
import ColorTabs from "../ui/Tabs";

const Navbar = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <nav className="relative px-4 py-2 flex justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="#">
          <h1 className="text-black">TOSS</h1>
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-black p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex   lg:items-center ">
          <ColorTabs />
        </div>

        <a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-white hover:bg-gray-300 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          href="#"
        >
          Sign In
        </a>
        <a
          className="hidden lg:inline-block py-2 px-6 bg-black hover:bg-gray-800 text-sm text-white font-bold rounded-xl transition duration-200"
          href="#"
        >
          Sign up
        </a>
      </nav>
    </>
  );
};

export default Navbar;
