import React from "react";
import ProductCard from "../Home/ProductCard";

const Wishlist = () => {
  return (
    <section className="min-h-screen p-4 lg:p-0 lg:w-[80%] m-auto mt-4">
    <h2 className="pb-8 font-[inter] font-semibold text-lg md:text-xl">WishList</h2>
      <div className="grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-[320px]:grid-cols-1">
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

export default Wishlist;
