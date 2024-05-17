import React from "react";
import mainlogo from "../../assests/logo/mainlogo.png";
import metamask from "../../assests/logo/metamask.png";
import SideBar from "../Sidebar/Sidebar";
const Navbar = () => {
  const check = () => {
    alert("This is testing");
  };
  return (
    <div className="flex justify-between items-center h-[70px] px-2 md:px-10 bg-globalblack bg-opacity-[0.4] absolute z-10 w-screen">
      <div>
        <img
          src={mainlogo}
          alt=""
          className="w-[150px] h-[34px] md:w-[200px] md:h-[45px]"
        />
      </div>
      <div className="flex items-center font-exo">
        <button
          type="button"
          className="text-white bg-globalpink font-medium rounded-full text-sm px-5 py-2.5 text-center w-[178px] h-[48px] md:flex items-center justify-between text-[18px] hidden"
        >
          <span>
            <img src={metamask} alt="metamask" className="w-8" />
          </span>
          Connect Wallet
        </button>
        <button className="pl-6">
          <SideBar />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
