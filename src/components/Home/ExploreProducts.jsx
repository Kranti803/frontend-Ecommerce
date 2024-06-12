import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { serverUrl } from "../../redux/store";

const ExploreProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`${serverUrl}/get_all_products`);
      setProducts(data?.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
        {products?.map((product) => (
          <ProductCard
            id={product?._id}
            key={product?._id}
            title={product?.title}
            image={product?.productImage?.url}
            price={product?.price}
            rating={product?.rating}
            totalReviews={product?.reviews?.length}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          to={"/allproducts"}
          className="bg-[#DB4444] p-3 text-white font-[Inter] rounded-sm my-8"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default ExploreProducts;
