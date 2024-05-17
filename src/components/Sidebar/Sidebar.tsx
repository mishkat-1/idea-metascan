import React from "react";
import { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";

export const menuItem = [
  {
    id: "1",
    path: "https://explorer-design-2.vercel.app/stats",
    name: "Stats & Graphs",
  },
  {
    id: "2",
    path: "https://explorer-design-2.vercel.app/blocks",
    name: "Blocks",
  },
  {
    id: "3",
    path: "https://explorer-design-2.vercel.app/transactions",
    name: "Transactions",
  },
  {
    id: "4",
    path: "https://explorer-design-2.vercel.app/contracts",
    name: "Contracts",
  },
  {
    id: "5",
    path: "https://explorer-design-2.vercel.app/assests",
    name: "Assests",
  },
  // {
  //   id: "7",
  //   path: "/validators",
  //   name: "Validators",
  // },
  // {
  //   id: "8",
  //   path: "/nodes",
  //   name: "Nodes",
  // },
  {
    id: "6",
    path: "/faucet",
    name: "Faucet",
  },
];

const SideBar = () => {
  //     //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    setMenuCollapse(!menuCollapse);
    // menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div className=" ">
      <button onClick={menuIconClick}>
        {
          <BiSolidDashboard className="text-white w-[24px] h-[24px] md:w-[35px] md:h-[35px] cursor-pointer" />
        }
      </button>
      <div
        className={`bg-[#040507] w-[300px] z-[1000] h-screen fixed opacity-100 top-0 right-0 ${
          menuCollapse ? <FaXmark /> : "hidden"
        }`}
      >
        <button onClick={menuIconClick}>
          {<FaXmark className="w-6 h-6 mt-4 ml-[16rem] text-white" />}
        </button>
        <div className="overflow-y-auto h-screen sticky pb-16">
          {menuItem.map((item, index) => (
            <div key={index} className="flex text-white">
              {/* <p className='my-5 cursor-pointer ml-9'>{item.name}</p> */}
              {/* <a href={item.path}>{item.name}</a> */}
              <a
                href={`${item.path}`}
                target="_blank"
                className="my-4 cursor-pointer ml-7 text-[24px] font-semibold"
                // check this
                onClick={() => menuIconClick()}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
