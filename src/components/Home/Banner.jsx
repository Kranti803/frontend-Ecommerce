import React from "react";
import jbl from "../../assets/jbl.png";

const Banner = () => {
  return (
    <section className="h-[380px] w-full flex border-2 my-4 bg-black px-8 ">
      <div className="w-[50%] border-2 border-black font-[Inter] flex flex-col justify-evenly text-white">
        <p className="text-[#0f6] text-xs">Categories</p>
        <h2 className="font-bold text-xl">
          Enhance Your <br /> Music Experience
        </h2>
        <button className="bg-[#0F6] px-4 py-1 w-fit rounded-md">Buy Now</button>
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <img
          src={jbl}
          alt=""
          className="h-[80%] w-[80%] object-contain drop-shadow-[0px_20px_35px_rgba(255,255,255,0.5)]"
        />
      </div>
    </section>
  );
};

export default Banner;
