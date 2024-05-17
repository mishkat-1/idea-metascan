import React, { useEffect, useState } from "react";
import { BlockCard } from "../../components/BlockCard";
import { ErrorModal } from "../../components/ErrorModal";

function BlockPage() {
  const [visibleBlocks, setVisibleBlocks] = useState(3);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleError = (error: Error) => {
    setErrorMessage(error.message);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setErrorMessage("");
  };

  const fetchBlocks = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_GNOSIS_BLOCK}`);
      const res = await response.json();

      // console.log("console response data ");
      // console.log(res.items);
      setData(res.items);
    } catch (error) {
      console.log("i am here in error block ");
      console.error(error);
      handleError(error as Error);
    }
  };

  // console.log("this is data", data);

  useEffect(() => {
    fetchBlocks();
  }, []);
  const handleViewMore = () => {
    setVisibleBlocks((prevVisibleBlocks) => prevVisibleBlocks + 3);
  };

  return (
    <div className="pt-4">
      <ErrorModal
        show={showModal}
        onClose={handleCloseModal}
        title="Error in Blocks Fetching"
        message={errorMessage}
      />
      <h1 className="w-[180px] md:w-[700px] lg:w-[970px] xl:w-[1280px] mx-auto text-[16px] sm:text-[24px] md:text-[36px] lg:text-[40px] text-[#FFFFFF] font-bold font-adventPro">
        Latest Blocks
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 mt-4 w-[260px] mx-auto md:w-[700px] lg:w-[970px] xl:w-[1280px]">
        {data?.length ? (
          data?.slice(0, visibleBlocks).map((item, index) => (
            <div key={index}>
              <BlockCard item={item} />
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center w-[260px] mx-auto md:w-[700px] lg:w-[970px] xl:w-[1280px]">
            <div className="text-white">Loading....</div>
          </div>
        )}
      </div>

      {visibleBlocks < data.length && (
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
}

export default BlockPage;
