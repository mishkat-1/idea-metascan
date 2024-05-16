import React from "react";
import mainpage from "../../assests/videos/mainpage.mp4";
import { SearchBar } from "../../components/SearchBar";
import Navbar from "../../components/Navbar";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <video
        src={mainpage}
        autoPlay
        loop
        muted
        className="w-[100%] h-[100vh] object-cover"
      ></video>
      <div className="absolute top-0 w-screen">
        <SearchBar />
      </div>
    </div>
  );
};

export default HomePage;
