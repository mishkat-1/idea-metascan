import React, { useState } from "react";
import transactionData from "../../utils/transactionData";
import { TransactionCard } from "../../components/TransactionCard";

const TransactionPage = () => {
  const [visibleBlocks, setVisibleBlocks] = useState(3);

  const handleViewMore = () => {
    setVisibleBlocks((prevVisibleBlocks) => prevVisibleBlocks + 3);
  };
  return (
    <div className="pt-4">
      <h1 className="w-[180px] md:w-[700px] lg:w-[970px] xl:w-[1280px] mx-auto text-[16px] sm:text-[24px]  md:text-[36px] lg:text-[40px] text-[#FFFFFF] font-bold font-adventPro">
        Latest Transactions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 w-[260px] mx-auto md:w-[700px] lg:w-[970px] xl:w-[1280px]">
        {transactionData.slice(0, visibleBlocks).map((item, index) => (
          <div key={index}>
            <TransactionCard item={item} />
          </div>
        ))}
      </div>
      {visibleBlocks < transactionData.length && (
        <div className="flex justify-center items-center mt-8 mb-8 ">
          <div
            onClick={handleViewMore}
            className="text-globalcyan text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-exo cursor-pointer"
          >
            VIEW MORE
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionPage;
