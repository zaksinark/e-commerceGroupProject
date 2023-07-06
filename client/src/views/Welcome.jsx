import React from "react";
import TrackOrder from "./TrackOrder";
import TopNavBar from "../Components/TopNavBar";
import BottomNavBar from "../Components/BottomNavBar";
import Carousel from "./Carousel";
import AdvancedSearch from "./AdvancedSearch";

const Welcome = () => {
  return (
    <>
      <TopNavBar />
      <BottomNavBar />
      <hr />
      <div className="bg-gray-100 ">
        <h1>Popular Items</h1>
        <Carousel />
      </div>
      <br />
      <AdvancedSearch />
    </>
  );
};

export default Welcome;
