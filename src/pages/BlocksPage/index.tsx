import React, { useState } from "react";
import BlockCard from "../../components/blockCard";
import blocksData from "../../utils/blocksData";

function BlockPage() {
  const [visibleBlocks, setVisibleBlocks] = useState(3);

  const handleViewMore = () => {
    setVisibleBlocks((prevVisibleBlocks) => prevVisibleBlocks + 3);
    console.log("hjjj");
  };

  return (
    <div className="md:h-full p-5">
      <h1 className="text-[16px] sm:text-[24px] md:text-[36px] lg:text-[40px] text-[#FFFFFF] font-bold font-adventPro">
        Latest Blocks
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 mt-4">
        {blocksData.slice(0, visibleBlocks).map((item, index) => (
          <div key={index}>
            <BlockCard item={item} />
          </div>
        ))}
      </div>

      {visibleBlocks < blocksData.length && (
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
}

export default BlockPage;
