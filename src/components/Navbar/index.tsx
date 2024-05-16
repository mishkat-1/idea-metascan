import React from "react";
import MelonScanCard from "../../assests/logo/MelonCardLogo.png";
import metamask from "../../assests/logo/metamask.png";
import { BiSolidDashboard } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[70px] px-10 bg-globalblack bg-opacity-[0.4] absolute w-screen">
      <div>
        <img src={MelonScanCard} alt="" className="w-[230px] h-[40px]" />
      </div>
      <div className="flex items-center font-exo">
        <button
          type="button"
          className="text-white bg-globalpink font-medium rounded-full text-sm px-5 py-2.5 text-center w-[178px] h-[48px] flex items-center justify-between text-[18px]"
        >
          <span>
            <img src={metamask} alt="metamask" className="w-8" />
          </span>
          Connect Wallet
        </button>
        <button className="pl-6">
          <BiSolidDashboard className="text-white w-[35px] h-[35px]" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
