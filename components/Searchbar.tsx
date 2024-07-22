import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Searchbar = () => {
  return (
    <div className="flex w-5/6  lg:w-2/3  sm:w-4/5 md:w-1/2 relative">
      <Input
        className="border-gray-500 w-full pl-10  p-6 " // Add padding for the button
        placeholder="Search for a blog."
      />
      <Button className=" mt-1 absolute inset-y-0 right-0 bg-white p-2 rounded-full hover:bg-gray-200 focus:outline-none flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </Button>
    </div>
  );
};

export default Searchbar;
