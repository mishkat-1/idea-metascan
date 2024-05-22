import React from "react";
import MelonCard from "../../assests/images/MelonCard.png";
import MelonCardLogo from "../../assests/logo/MelonCardLogo.png";
import buttonlogo7 from "../../assests/logo/buttonlogo7.png";
import metamask from "../../assests/logo/metamask.png";
import { useAddress } from "../../context/AddressContext";
const Footer = () => {
  const { userAddress } = useAddress();
  return (
    <div className="flex justify-between font-exo">
      <div className="w-screen lg:w-[550px] xl:w-[796px] lg:h-screen bg-globalblack">
        <div className=" w-[300px] sm:w-[355px] h-[61px] mx-auto mt-[92px]">
          <img src={MelonCardLogo} alt="" />
        </div>
        <nav className="bg-globalblack  mt-14">
          <div
            className="items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul
              className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 text-center
              underline decoration-slate-200 underline-offset-2 md:no-underline
               rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ml-auto mr-auto"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-[18px] text-white rounded bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-[18px] text-white rounded bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-[18px] text-white rounded bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-[18px] text-white rounded bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="w-[310px] md:w-[360px] xl:w-[451px] mx-auto mt-24">
          <button
            type="button"
            className="text-white bg-globalpink font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 w-[310px] md:w-[360px] xl:w-[451px] h-[63px] flex items-center justify-between text-[18px]"
          >
            Enter Melonverse
            <span>
              <img src={buttonlogo7} alt="buttonlogo7" />
            </span>
          </button>
          <button
            type="button"
            className="text-white bg-globalcyan font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 w-[310px] md:w-[360px] xl:w-[451px] h-[63px] flex items-center justify-between text-[18px] mt-6"
          >
            {userAddress.length > 0 ? userAddress : "Enter Melonverse"}
            <span>
              <img src={metamask} alt="metamask" className="w-8" />
            </span>
          </button>
        </div>
        <div>
          <p className=" text-center text-[12px] sm:text-[14px] text-white w-[320px] sm:w-[354px] mt-32 mb-3 sm:mt-52 mx-auto">
            Copyright ©️ 2024 All Rights Reserved with{" "}
            <span className="text-globalyellow">Melonverse</span>
          </p>
        </div>
      </div>
      <div className="md:w-[460px] lg:w-[600px] xl:w-[740px] h-[757px] hidden lg:block">
        <img src={MelonCard} alt="MelonCard" className="w-[740px] h-[757px]" />
      </div>
    </div>
  );
};

export default Footer;
