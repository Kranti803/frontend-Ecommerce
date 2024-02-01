import React from "react";
import monitor from "../../assets/monitor.png";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductCard = ({ newProduct }) => {
  return (
    <div className="max-w-[250px] max-h-[400px] font-[poppins] relative flex-shrink-0">
      <div className="max-h-[250px] w-full bg-[#F5F5F5]">
        <img src={monitor} alt="" className="w-full h-full p-8 bg-inherit" />
        <button className="bg-[#DB4444] text-white w-full text-sm py-2">Add To Cart</button>
      </div>
      <div className="absolute top-2 w-full flex justify-end px-2">
        <button className="borrder-none outline-none bg-[#ffffff] h-[25px] w-[25px] flex items-center justify-center p-[2px] rounded-full">
          <FaRegHeart />
        </button>
      </div>
      <Link className="flex flex-col gap-[8px]">
        <h4 className="text-sm md:text-base">HAVIT HV-G92 Gamepad</h4>
        <p className="text-sm md:text-base flex gap-4">
          <span>$120</span>
          <span className="line-through text-gray-500">$160</span>
        </p>
        <div className="flex gap-2">
          <div className="flex gap-[1px] text-[#FFAD33]">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <span className="text-xs md:text-sm text-gray-500">(16)</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
