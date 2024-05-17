import React, { useEffect, useState } from "react";
import arrowlogo from "../../assests/logo/arrowlogo.png";
import blocklogo from "../../assests/logo/blocklogo.png";
import clock from "../../assests/logo/clock.png";
import world from "../../assests/logo/world.png";
import percent from "../../assests/logo/percent.png";
import dollar from "../../assests/logo/dollar.png";
import AnimatedNumber from "../AnimatedNumber";

interface Props {
  average_block_time: number;
  coin_image?: string;
  coin_price?: string;
  coin_price_change_percentage: number;
  gas_price_updated_at?: Date;
  gas_prices?: {
    average?: number;
    fast?: number;
    slow?: number;
  };
  gas_prices_update_in?: number;
  gas_used_today?: string;
  market_cap: number;
  network_utilization_percentage?: number;
  secondary_coin_price?: number;
  static_gas_price?: number;
  total_addresses?: string;
  total_blocks: number;
  total_gas_used?: string;
  total_transactions?: string;
  transactions_today: number;
  tvl?: number | number | any;
}

export const TestimonialCards = () => {
  const [singleArr, setSingleArr] = useState<Props>();
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (error: Error) => {
    setErrorMessage(error.message);
    setShowModal(true);
  };

  const test = async () => {
    try {
      const resp = await fetch(`${process.env.REACT_APP_GNOSIS_CARDS_STATS}`);
      const response = await resp.json();
      setSingleArr(response);
      console.log("this is sing arr===", singleArr);
    } catch (error) {
      console.log("i am here in error block ");
      console.error(error);
      handleError(error as Error);
    }
  };

  const [number, setNumber] = useState(0);
  const [secodndNumber, setSecondNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(2314453);
      setSecondNumber(23144);
    }, 3000); // Change number every 2 seconds

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  useEffect(() => {
    test();
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <div>
        <div className="flex md:w-[420px] lg:w-[520px] xl:w-[720px] h-[252px] items-center justify-center bg-globalblack">
          <div className="bg-[#ffffff] bg-opacity-10 rounded-full w-16 h-16">
            <img src={arrowlogo} alt="" className="w-10 h-10 ml-3 mt-3" />
          </div>
          <div className="ml-3">
            <p className="text-[#ffffff] text-[15px]">Total Transactions</p>
            <p className="text-[28px] text-blue-300">
              <AnimatedNumber value={number} />
            </p>
          </div>
        </div>
        <div className="flex md:w-[420px] lg:w-[520px] xl:w-[720px] h-[252px] items-center justify-center bg-[#121212]">
          <div className="bg-[#ffffff] bg-opacity-10 rounded-full w-16 h-16">
            <img src={blocklogo} alt="" className="w-10 h-10 ml-3 mt-3" />
          </div>
          <div className="ml-3">
            <p className="text-[#ffffff] text-[15px]">Total Transactions</p>
            <p className="text-[28px] text-blue-300">
              <AnimatedNumber value={secodndNumber} />
            </p>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2  bg-gradient-to-r from-violet-500 to-fuchsia-500 md:w-[420px] lg:w-[820px] h-[700px] md:h-[504px] items-center justify-center">
        <div className="flex flex-col justify-center items-center text-[#ffffff]">
          <div className="flex justify-center items-center  rounded-full bg-[#FFFFFF] bg-opacity-10 w-[60px] h-[60px]">
            <img src={clock} alt="" className="h-[35px] w-[35px] " />
          </div>
          <div className="flex flex-col items-center mb-3">
            <span className="text-[18px] font-light font-exo">
              Avg. Block Time
            </span>
            <span className="text-[31px] font-bold font-exo">
              {(singleArr &&
                (singleArr?.average_block_time / 1000).toFixed(1)) ||
                0}{" "}
              sec
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-[#ffffff]">
          <div className="flex justify-center items-center  rounded-full bg-[#FFFFFF] bg-opacity-10 w-[60px] h-[60px]">
            <img src={world} alt="" className="h-[35px] w-[35px]" />
          </div>
          <div className="flex flex-col items-center mb-3">
            <span className="text-[18px] font-light font-exo">Market Cap</span>
            <span className="text-[31px] font-bold font-exo">
              $
              {(singleArr && (singleArr?.market_cap / 1000000000).toFixed(2)) ||
                0}{" "}
              B
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-[#ffffff]">
          <div className="flex justify-center items-center  rounded-full bg-[#FFFFFF] bg-opacity-10 w-[60px] h-[60px]">
            <img src={percent} alt="" className="h-[35px] w-[35px]" />
          </div>
          <div className="flex flex-col items-center mb-3">
            <span className="text-[18px] font-light font-exo">Avg. Apr ⓘ</span>
            <span className="text-[31px] font-bold font-exo">
              {(singleArr && (singleArr?.total_blocks / 1000000).toFixed(1)) ||
                0}{" "}
              %
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-[#ffffff]">
          <div className="flex justify-center items-center  rounded-full bg-[#FFFFFF] bg-opacity-10 w-[60px] h-[60px]">
            <img src={dollar} alt="" className="h-[35px] w-[35px]" />
          </div>
          <div className="flex flex-col items-center mb-3">
            <span className="text-[18px] font-light font-exo">
              Circulation Supply ⓘ
            </span>
            <span className="text-[31px] font-bold font-exo">
              {(singleArr &&
                (singleArr?.transactions_today / 100000).toFixed(2)) ||
                0}{" "}
              B
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
