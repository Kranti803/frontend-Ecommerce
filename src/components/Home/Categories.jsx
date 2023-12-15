import React from "react";
import smartphoneVector from '../../assets/smartphone-vector.jpg';
import smartwatchVector from '../../assets/smartwatch-vector.png';
import laptopVector from '../../assets/laptop-vector.jpg';
import joystickVector from '../../assets/joystick-vector.jpg';
import cameraVector from '../../assets/camera-vector.jpg';
import headPhoneVector from '../../assets/headphone-vector.png';
import { Link } from "react-router-dom";



const Categories = () => {
  const categoryButtons = [
    {
      id: 1,
      svg:smartphoneVector,
      name: "Phone",
    },
    {
      id: 2,
      svg: smartwatchVector,
      name: "SmartWatch",
    },
    {
      id: 3,
      svg: laptopVector,
      name: "Computer",
    },
    {
      id: 4,
      svg:joystickVector,
      name: "Gaming",
    },
    {
      id: 5,
      svg:cameraVector,
      name: "Camera",
    },
    {
      id: 6,
      svg:headPhoneVector,
      name: "Headphones",
    },
  ];
  return (
    <section className="pt-4 px-[6px]">
      <div className="flex flex-col pb-2 pt-2">
        <div className="flex gap-2 items-center">
          <span className="h-[24px] w-[24px] bg-[#DB4444]"></span>
          <span className="text-xs font-bold text-[#DB4444]">Categories</span>
        </div>
        <h3 className=" text-2xl md:text-[36px] font-[Inter]">Browse By Category</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center mt-2">
        {categoryButtons.map((item) => (
          <Link key={item.id} className="h-[110px] w-[110px] px-4 font-[Inter] flex flex-col items-center justify-center gap-2 rounded">
            <img src={item.svg} alt="" className="h-[80%] rounded-full" />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
