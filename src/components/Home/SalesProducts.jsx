import React from "react";
import ProductCard from "./ProductCard";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const SalesProducts = () => {
  const slideLeft = () => {
    const slider = document.getElementById("slider_container");
    slider.scrollLeft = slider.scrollLeft - 650;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider_container");
    slider.scrollLeft = slider.scrollLeft + 650;
  };
  return (
    <section className="pt-4 px-[6px]">
      <div className="flex items-center justify-between pb-4">
        <div>
          <div className="flex gap-2 items-center">
            <span className="h-[24px] w-[24px] bg-[#DB4444]"></span>
            <span className="text-xs font-bold text-[#DB4444]">Today's</span>
          </div>
          <h3 className=" text-2xl md:text-[36px] font-[Inter]">Flash Sales</h3>
        </div>
        <div className="hidden md:flex gap-4">
          <button
            className="p-3 rounded-[100%] bg-[#F5F5F5]"
            onClick={slideLeft}
          >
            <FaArrowLeft />
          </button>
          <button
            className=" p-3 rounded-[100%] bg-[#F5F5F5]"
            onClick={slideRight}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div
        id="slider_container"
        className=" flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default SalesProducts;
