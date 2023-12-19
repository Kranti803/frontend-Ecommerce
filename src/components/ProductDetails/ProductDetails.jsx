import React from "react";
import consoleImg from "../../assets/console.png";
import { FaStar } from "react-icons/fa";
import iconDelivery from "../../assets/iconDelivery.png";
import iconReturn from "../../assets/iconReturn.png";

const ProductDetails = () => {
  return (
    <section className="min-h-screen p-4 lg:p-0 lg:w-[80%] m-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <aside className="md:w-1/2 bg-[#f3f2f2] p-10 md:p-20">
          <img src={consoleImg} className="" alt="" />
        </aside>
        <aside className="md:w-1/2">
          <div>
            <h2 className="font-bold font-[poppins]">Havic HV G-92 Gamepad</h2>
            <div className="flex gap-2 items-center">
              <div className="flex items-center gap-[1px] text-yellow-400 py-2">
                <FaStar size={10} />
                <FaStar size={10} />
                <FaStar size={10} />
                <FaStar size={10} />
                <FaStar size={10} />
              </div>
              <span className="text-sm text-gray-500 font-[poppins]">
                19 reviews
              </span>
              <span className="text-green-600 text-xs md:text-sm">
                In Stock
              </span>
            </div>
            <p className="font-[poppins] font-semibold text-sm pb-2">$192.00</p>
            <p className="font-[poppins] text-xs md:text-sm pb-2">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>
          <div className="flex justify-center items-center my-2">
            <button className="text-sm w-full md:w-1/2 bg-[#DB4444] text-white font-[inter] px-4 py-1 rounded-sm">
              Buy Now
            </button>
          </div>
          <div className="border-[1px] flex justify-center items-center flex-col w-full md:w-1/2 m-auto border-solid border-gray-400 mt-3">
            <aside className="w-full flex gap-2 font-[Inter] border-[1px] border-solid border-gray-400 py-4">
              <img src={iconDelivery} alt="" className="h-[25px] w-[25px]" />
              <p>Free Delivery</p>
            </aside>
            <aside className="w-full flex items-center font-[inter] gap-2 border-[1px] border-solid border-gray-400 py-4">
              <img src={iconReturn} alt="" className="h-[25px] w-[25px]" />
              <p>Return Delivery</p>
            </aside>
          </div>
        </aside>
      </div>
      <div className="mt-4">Reviews section</div>
    </section>
  );
};

export default ProductDetails;
