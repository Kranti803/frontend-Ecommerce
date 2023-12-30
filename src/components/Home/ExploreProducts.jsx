import React from "react";
import ProductCard from "./ProductCard";

const ExploreProducts = () => {
  return (
    <section className="pt-4 px-[6px]">
      <div className="flex items-center justify-between pb-4">
        <div>
          <div className="flex gap-2 items-center">
            <span className="h-[24px] w-[20px] bg-[#DB4444]"></span>
            <span className="text-xs font-bold text-[#DB4444]">
              Our Products
            </span>
          </div>
          <h3 className=" text-2xl md:text-[28px] font-[Inter]">
            Explore Our Products
          </h3>
        </div>
      </div>
      <div className="grid max-[280px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8">
        <ProductCard newProduct={true} />
        <ProductCard />
        <ProductCard />
        <ProductCard newProduct={true} />
        <ProductCard />
        <ProductCard newProduct={true} />
        <ProductCard />
        <ProductCard newProduct={true} />
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-[#DB4444] p-3 text-white font-[Inter] rounded-md my-8">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ExploreProducts;
