import React from "react";
import { FaSearch } from "react-icons/fa";
import { text } from "stream/consumers";

export const SearchBar = () => {
  return (
    <div className="font-exo">
      <div className="flex items-center justify-center h-screen my-auto ">
        <div className="relative">
          <div className="text-white absolute mt-[7px] sm:mt-[16px] right-8 border w-6 h-6 sm:w-9 sm:h-9 rounded-lg">
            <FaSearch className=" sm:mt-2 mt-1 w-3 sm:w-10" />
          </div>
          <input
            type="text"
            placeholder="Search transactions, blocks"
            className="border border-[#ffffff] mb-2 h-[40px] sm:h-[65px] w-[18rem] sm:w-[22rem] md:w-[600px] pl-11 pr-[5.5rem] sm:pr-32 md:pr-[8rem] lg:pr-32 py-3 sm:py-6 bg-[#081015] bg-opacity-[0.8] text-white font-exo z-[-8] font-normal rounded-full outline-none placeholder:-translate-y-0.5 sm:placeholder:-translate-y-0 placeholder:text-[16px] sm:placeholder:text-[15px] sm:placeholder-white   "
          />
          {/* <FaSearch className="text-white absolute mt-[12px] sm:mt-[25px] ml-4 right-0" /> */}
        </div>
      </div>
    </div>
  );
};
