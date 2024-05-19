// import React from "react";
import { RiFileCopyLine } from "react-icons/ri";
import { blockCard } from "../../utils/blockCard";
import { Tooltip } from "react-tooltip";
export function BlockCard({ item }: { item: any }) {
  // console.log(item);
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

  return (
    <div className="bg-blue-700  p-1 pl-2 pt-1 border border-globalgrey h-[110px] w-[250px] sm:w-[300px] sm:h-[135px]  md:w-[325px] md:h-[140px]  lg:w-[375px] lg:h-[174px]">
      <div>
        {/* part1 */}
        <div className="flex flex-row items-center ">
          <div>
            <div className="text-globalgrey text-[8px] sm:text-[9px]  md:text-[9px] lg:text-[14px] font-exo pt-2 ">
              Block Reward
            </div>
            <div className="text-globalcyan text-[12px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-exo">
              {item.rewards[0]?.reward.slice(0, 6)}
              {/* <span className="text-globalcyan text-[11px] sm:text-[14px] md:text-[14px] lg:text-[18px] font-exo">
                MELON
              </span> */}
            </div>
          </div>
          <div className="ml-8 sm:ml-24 md:ml-24 lg:ml-28">
            <div className="text-globalgrey text-[8px] sm:text-[9px]  md:text-[9px] lg:text-[14px] font-exo pt-2 ">
              GAS Used
            </div>
            <div className="text-globalwhite text-[11px] sm:text-[14px] md:text-[14px] lg:text-[18px] font-bold font-exo flex items-center">
              {item.gas_used}
            </div>
          </div>
        </div>
        {/* part2 */}
        <div className="flex flex-row items-center">
          <div>
            <div className="text-globalgrey text-[8px] sm:text-[9px]  md:text-[9px] lg:text-[14px] font-exo  ">
              Hash
            </div>
            <div className="text-globalwhite text-[11px] sm:text-[14px] md:text-[14px] lg:text-[18px] font-bold font-exo flex items-center">
              {item.hash.slice(0, 12)}....
              <span className="ml-1">
                <CopyToClipboardIcon text={item.hash} />
              </span>
              <Tooltip
                id={item.hash}
                place="top"
                style={{ backgroundColor: "black", color: "white" }}
                content={item.hash}
              />
            </div>
          </div>
          <div className="ml-2 sm:ml-6  md:ml-7 lg:ml-8">
            <div className="text-globalgrey text-[8px] sm:text-[9px]  md:text-[9px] lg:text-[14px] font-exo  ">
              TX Fees
            </div>
            <div className="text-globalwhite text-[11px] sm:text-[14px] md:text-[14px] lg:text-[18px] font-bold font-exo flex items-center">
              {item.tx_fees.slice(0, 11)}...
            </div>
          </div>
        </div>
        {/* part3 */}
        <div className="flex flex-row">
          <div>
            <div className="text-globalgrey text-[8px] sm:text-[9px]  md:text-[9px] lg:text-[14px] font-exo  ">
              Age
            </div>
            <div className="text-globalwhite text-[11px] sm:text-[14px] md:text-[14px] lg:text-[18px] font-bold font-exo flex items-center">
              {item.blob_tx_count} Hr
            </div>
          </div>
          <div className="ml-[86px] sm:ml-[125px] md:ml-[130px] lg:ml-[165px]">
            <div className="text-globalgrey text-[8px] sm:text-[9px]  md:text-[9px] lg:text-[14px] font-exo  ">
              Validator
            </div>
            <div className="text-globalwhite text-[11px] sm:text-[14px] md:text-[14px] lg:text-[18px] font-bold font-exo flex items-center">
              {/* {item.validator} */}
              Giant-Tech
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
