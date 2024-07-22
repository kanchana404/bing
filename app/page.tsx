import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import React from "react";

const page = () => {
  return (
    <div className="overflow-hidden h-screen">
      <div className="h-full w-full">
       
        <div className="w-full flex justify-center items-center h-full">
          <Searchbar />
        </div>
      </div>
    </div>
  );
};

export default page;
