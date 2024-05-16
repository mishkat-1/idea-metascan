import React, { useState } from "react";
import cardData from "../../utils/Carddata";
import TransactionCard from "../../components/TransactionCard";

const TransactionPage = () => {
  const [visibleBlocks, setVisibleBlocks] = useState(3);

  const handleViewMore = () => {
    setVisibleBlocks((prevVisibleBlocks) => prevVisibleBlocks + 3);
  };
  return (
    <div className="md:h-full" style={{}}>
      <h1 className=" text-[16px] sm:text-[24px]  md:text-[36px] lg:text-[40px] text-[#FFFFFF] font-bold font-adventPro">
        Latest Transactions
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-y-4 mt-4  ">
        {cardData.slice(0, visibleBlocks).map((item, index) => (
          <div key={index}>
            <TransactionCard item={item} />
          </div>
        ))}
      </div>
      {visibleBlocks < cardData.length && (
        <div className="flex justify-center items-center mt-8 mb-8 ">
          <div
            onClick={handleViewMore}
            className="text-[#0ABDC6] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-exo cursor-pointer"
          >
            VIEW MORE
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionPage;
