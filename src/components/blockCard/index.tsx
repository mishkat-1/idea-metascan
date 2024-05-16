import React from "react";
import { RiFileCopyLine } from "react-icons/ri";
import { BlockData } from "../../utils/blocksData";
function BlockCard({ item }: { item: BlockData }) {
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
    <div className="bg-blue-700   p-1 pl-2 pt-1 border border-[#6A6A6A] h-[110px] sm:w-[300px] sm:h-[135px]  md:w-[320px] md:h-[140px]  lg:w-[385px] lg:h-[174px]">
      <div>
        {/* part1 */}
        <div className="flex flex-row items-center ">
          <div>
            <div className="text-[#6A6A6A] text-[8px] sm:text-[9px]  md:text-[9px] lg:text-[14px] font-exo pt-2 ">
              Block Reward
            </div>
            <div className="text-[#0ABDC6] text-[12px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-exo">
              {item.reward}
              <span className="text-[#0ABDC6] text-[11px] sm:text-[14px] md:text-[14px] lg:text-[18px] font-exo">
                MELON
              </span>
            </div>
          </div>
          <div className="ml-8 md:ml-10 lg:ml-12">
            <div className="text-[#6A6A6A] text-[8px]  sm:text-[9px]  md:text-[10px] lg:text-[14px]font-exo">
              GAS Used
            </div>
            <div className="text-[#DFDFDF] text-[11px] sm:text-[14px] md:text-[14px] lg:text-[18px] font-bold font-exo flex items-center">
              {item.gas}
            </div>
          </div>
        </div>
        {/* part2 */}
        <div className="flex flex-row items-center">
          <div>
            <div className="text-[#6A6A6A] text-[8px]  sm:text-[9px]  md:text-[10px] lg:text-[14px]font-exo">
              Trx ID
            </div>
            <div className="text-[#DFDFDF] text-[11px] sm:text-[14px] md:text-[14px] lg:text-[18px] font-bold font-exo flex items-center">
              {item.trxId}
              <span className="ml-1">
                <CopyToClipboardIcon text={item.trxId} />
              </span>
            </div>
          </div>
          <div className="ml-2 sm:ml-2 md:ml-5 lg:ml-6">
            <div className="text-[#6A6A6A] text-[8px]  sm:text-[9px]  md:text-[10px] lg:text-[14px]font-exo">
              Total Transactions
            </div>
            <div className="text-[#DFDFDF] text-[11px] sm:text-[14px] md:text-[14px] lg:text-[18px] font-bold font-exo flex items-center">
              {item.transactions}
            </div>
          </div>
        </div>
        {/* part3 */}
        <div className="flex flex-row">
          <div>
            <div className="text-[#6A6A6A] text-[8px]  sm:text-[9px]  md:text-[10px] lg:text-[14px]font-exo">
              Age
            </div>
            <div className="text-[#DFDFDF] text-[11px] sm:text-[14px] md:text-[14px] lg:text-[18px] font-bold font-exo flex items-center">
              {item.age}
            </div>
          </div>
          <div className="ml-[86px] sm:ml-[105px] md:ml-[120px] lg:ml-[150px]">
            <div className="text-[#6A6A6A] text-[8px]  sm:text-[9px]  md:text-[10px] lg:text-[14px]font-exo">
              Validator
            </div>
            <div className="text-[#DFDFDF] text-[11px] sm:text-[14px] md:text-[14px] lg:text-[18px] font-bold font-exo flex items-center">
              {item.validator}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockCard;
