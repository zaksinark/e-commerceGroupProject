import React from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Carousel = () => {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  return (
    <div className="relative">
      <div className="absolute right-0 top-15 transform -translate-y-2 z-50">
        <button onClick={scrollLeft} className="p-4 m-2 bg-white rounded-lg">
          <FiChevronLeft style={{ color: "black" }} />
        </button>
        <button onClick={scrollRight} className="p-4 m-2 bg-white rounded-lg">
          <FiChevronRight style={{ color: "black" }} />
        </button>
      </div>
      <br />
      <div
        id="content"
        className="carousel p-4 
      flex items-center
       justify-start overflow-x-auto
       relative gap-8
       scroll-smooth
       scrollbar-hide"
      >
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
