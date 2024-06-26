import { React, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";
import { serverUrl } from "../../redux/store";
import Loader from "../Layouts/Loader";
import { useSelector } from "react-redux";

const SalesProducts = () => {
  const slideLeft = () => {
    const slider = document.getElementById("slider_container");
    slider.scrollLeft = slider.scrollLeft - 650;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider_container");
    slider.scrollLeft = slider.scrollLeft + 650;
  };

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `${serverUrl}/get_all_products?search=&category=`
      );
      setProducts(data?.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const featuredProducts = [...products].filter(
    (item) => item.featured === true
  );

  const { loading } = useSelector((state) => state.auth);
  if (loading) return <Loader />;
  return (
    <section className="pt-4 px-[6px]">
      <div className="flex items-center justify-between pb-4">
        <div>
          <div className="flex gap-2 items-center">
            <span className="h-[20px] w-[20px] bg-[#DB4444]"></span>
            <span className="text-xs font-bold text-[#DB4444]">Today's</span>
          </div>
          <h3 className=" text-2xl md:text-[28px] font-[Inter]">
            Featured Products
          </h3>
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
        className=" flex gap-8 overflow-x-scroll scroll-smooth no-scrollbar"
      >
        {featuredProducts?.map((product) => (
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
    </section>
  );
};

export default SalesProducts;
