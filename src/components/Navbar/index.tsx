import React from "react";
import mainlogo from "../../assests/logo/mainlogo.png";
import metamask from "../../assests/logo/metamask.png";
import SideBar from "../Sidebar/Sidebar";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleEthers = () => {
    try {
      if (window.ethereum) {
        window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((res: any) => {
            accountChanged([res[0]]);
          })
          .catch((err: any) => {
            setShow(false);
          });
        setShow(true);
      } else {
        setShow(false);
      }
    } catch (error) {
      console.log("this is error", error);
      setShow(false);
    }
  };
  const accountChanged = (accountName: any) => {
    setUserAddress(accountName);
  };

  const notify = () =>
    toast("Address Copied", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progressStyle: { background: "#EA00D9" },
      progress: undefined,
      theme: "info",
    });

  const copytext = () => {
    navigator.clipboard.writeText(userAddress);
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
        <div>
          {show ? (
            <div
              onClick={() => {
                copytext();
                notify();
              }}
              className=" bg-[#ffffff] h-[40px] text-[8px] text-base rounded-lg p-2 cursor-pointer hover:bg-[#b6c2cb] ease-in-out duration-200 flex items-center"
            >
              {String(userAddress)?.substring(0, 9)}...
              <span>{String(userAddress)?.substring(24, 30)}</span>
              <span>
                <IoCopyOutline className="hover:cursor-pointer w-8 h-5" />
              </span>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleEthers}
              className="text-white bg-globalpink font-medium rounded-full text-sm px-5 py-2.5 text-center w-[178px] h-[48px] md:flex items-center justify-between text-[18px] hidden"
            >
              <span>
                <img src={metamask} alt="metamask" className="w-8" />
              </span>
              Connect Wallet
            </button>
          )}
          {errorMessage && <div> {errorMessage} </div>}
          <ToastContainer toastStyle={{ backgroundColor: "black" }} />
        </div>
        <button className="pl-6">
          <SideBar />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
