import React, { useEffect, useState } from "react";
import { TransactionCard } from "../../components/TransactionCard";
import { ErrorModal } from "../../components/ErrorModal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const TransactionPage = () => {
  const [visibleBlocks, setVisibleBlocks] = useState(12);
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
      const response = await fetch(
        `${process.env.REACT_APP_GNOSIS_TRANSACTIONS}`
      );
      const res = await response.json();

      console.log("console response data ", res);
      // console.log(res.items);
      setData(res);
    } catch (error) {
      console.log("i am here in error block ");
      console.error(error);
      handleError(error as Error);
    }
  };

  console.log("this is data", data);

  useEffect(() => {
    fetchBlocks();
  }, []);

  const handleViewMore = () => {
    setVisibleBlocks((prevVisibleBlocks) => prevVisibleBlocks + 3);
  };

  const responsive = {
    largedesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 10, // this is needed to tell the amount of px that should be visible.
    },
    mediumdesktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      // partialVisibilityGutter: 10, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 350 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    smallmobile: {
      breakpoint: { max: 350, min: 0 },
      items: 1,
      partialVisibilityGutter: 10, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <div className="pt-4 h-[400px] bg-[#020519]">
      <ErrorModal
        show={showModal}
        onClose={handleCloseModal}
        title="Error in Transaction Fetching"
        message={errorMessage}
      />
      <h1 className="w-[180px] md:w-[730px] lg:w-[980px] xl:w-[1280px] mx-auto text-[16px] sm:text-[24px]  md:text-[36px] lg:text-[40px] text-[#FFFFFF] font-bold font-adventPro mt-6 mb-12">
        Latest Transactions
      </h1>
      <div className="w-[280px] mx-auto sm:w-[350px] md:w-[730px] lg:w-[980px] xl:w-[1280px]">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          arrows={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          // infinite={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          partialVisible={true}
        >
          {data?.length ? (
            data.slice(0, visibleBlocks).map((item, index) => (
              <div key={index}>
                <TransactionCard item={item} />
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center w-[260px] mx-auto md:w-[700px] lg:w-[970px] xl:w-[1280px]">
              <div className="text-white">Loading....</div>
            </div>
          )}
        </Carousel>
      </div>
      {/* {visibleBlocks < data.length && (
        <div className="flex justify-center items-center mt-8 mb-8 ">
          <div
            // onClick={handleViewMore}
            className="text-globalcyan text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-exo cursor-pointer"
          >
            VIEW MORE
          </div>
        </div>
      )} */}
    </div>
  );
};

export default TransactionPage;
