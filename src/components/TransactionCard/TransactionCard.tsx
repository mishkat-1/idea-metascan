import React from "react";
import { RiFileCopyLine } from "react-icons/ri";

import { transactionData } from "../../utils/transactionData";
export function TransactionCard({ item }: { item: any }) {
  console.log("transaction card");
  console.log(item);
  // copy function
  const CopyToClipboardIcon = ({ text }: any) => {
    const handleClick = async () => {
      try {
        await navigator.clipboard.writeText(text);
        // alert(text);
      } catch (err) {
        console.error("Failed to copy: ", err);
        alert("Failed to copy to clipboard!");
      }
    };

    return (
      <span onClick={handleClick} style={{ cursor: "pointer" }}>
        <RiFileCopyLine />
      </span>
    );
  };

  // console.log(item);
  return (
    <div className="">
      <div className=" bg-blue-700 p-1 pl-2 pt-1 border border-globalgrey h-[110px] w-[250px] sm:w-[300px] sm:h-[135px]  md:w-[325px] md:h-[140px]  lg:w-[375px] lg:h-[174px]">
        {/* amount part */}
        <div>
          <div className="text-globalgrey text-[8px] sm:text-[9px]  md:text-[10px] lg:text-[14px] font-exo pt-2 ">
            Block
          </div>
          <div className="text-globalcyan text-[12px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-exo">
            {item.block}
          </div>
        </div>
        {/* sender and receiver part */}
        <div className="flex flex-row items-center">
          <div>
            <div className="text-globalgrey text-[8px] sm:text-[9px]  md:text-[10px] lg:text-[14px] font-exo">
              Gas Price
            </div>
            <div className="text-globalwhite text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-bold font-exo flex items-center">
              {item.gas_price}
              <span className="ml-1">
                <CopyToClipboardIcon text={item.gas_price} />
              </span>
            </div>
          </div>
          <div className="ml-9 md:ml-10 lg:ml-12">
            <div className="text-globalgrey text-[8px] sm:text-[9px]  md:text-[10px] lg:text-[14px] font-exo">
              Gas Used
            </div>
            <div className="text-globalwhite text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-bold font-exo flex items-center">
              {item.gas_used}
              <span className="ml-1">
                <CopyToClipboardIcon text={item.gas_used} />
              </span>
            </div>
          </div>
        </div>
        {/* age part */}
        <div className="flex flex-row">
          <div>
            <div className="text-globalgrey text-[8px] sm:text-[9px]  md:text-[10px] lg:text-[14px] font-exo">
              Age
            </div>

            <div className="text-globalwhite  text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-bold font-exo ">
              {item.type}Hr
            </div>
          </div>
          <div className=" ml-[102px] sm:ml-28 md:ml-32 lg:ml-[9.3rem]">
            <div className="text-globalgrey text-[8px] sm:text-[9px]  md:text-[10px] lg:text-[14px] font-exo">
              Hash
            </div>
            <div className="text-globalwhite text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]  font-exo font-bold flex items-center">
              {item.hash?.slice(0, 12)}....
              <span className="ml-1">
                <CopyToClipboardIcon text={item.hash} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
