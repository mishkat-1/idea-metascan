import React from "react";
import { RiFileCopyLine } from "react-icons/ri";

import { transactionData } from "../../utils/transactionData";
export function TransactionCard({ item }: { item: transactionData }) {
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

  console.log(item);
  return (
    <div className=" bg-blue-700  p-1 pl-2 pt-1 border border-globalgrey h-[110px] sm:w-[300px] sm:h-[135px]  md:w-[340px] md:h-[140px]  lg:w-[385px] lg:h-[174px]">
      {/* amount part */}
      <div>
        <div className="text-globalgrey text-[8px] sm:text-[9px]  md:text-[10px] lg:text-[14px] font-exo pt-2 ">
          Amount
        </div>
        <div className="text-globalcyan text-[12px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-exo">
          {item.amount}
        </div>
      </div>
      {/* sender and receiver part */}
      <div className="flex flex-row items-center">
        <div>
          <div className="text-globalgrey text-[8px]  sm:text-[9px]  md:text-[10px] lg:text-[14px]font-exo">
            Sender
          </div>
          <div className="text-globalwhite text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-bold font-exo flex items-center">
            {item.sender}
            <span className="ml-1">
              <CopyToClipboardIcon text={item.sender} />
            </span>
          </div>
        </div>
        <div className="ml-4">
          <div className="text-globalgrey text-[8px] sm:text-[9px]  md:text-[10px] lg:text-[14px] font-exo">
            Receiver
          </div>
          <div className="text-globalwhite text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-bold font-exo flex items-center">
            {item.receiver}
            <span className="ml-1">
              <CopyToClipboardIcon text={item.receiver} />
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
            {item.age}
          </div>
        </div>
        <div className=" ml-[102px] sm:ml-28 md:ml-32 lg:ml-36">
          <div className="text-globalgrey text-[8px] sm:text-[9px]  md:text-[10px] lg:text-[14px] font-exo">
            Trx Id
          </div>
          <div className="text-globalwhite text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]  font-exo font-bold flex items-center">
            {item.trxId}
            <span className="ml-1">
              <CopyToClipboardIcon text={item.trxId} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
