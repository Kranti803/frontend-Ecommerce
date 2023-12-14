import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { GiConsoleController } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { MdHeadphones } from "react-icons/md";



const Categories = () => {
  const categoryButtons = [
    {
      id: 1,
      icon: <IoPhonePortraitOutline size={20} />,
      name: "Phone",
    },
    {
      id: 2,
      icon: <BsSmartwatch size={20} />,
      name: "SmartWatch",
    },
    {
      id: 3,
      icon: <RiComputerLine size={20} />,
      name: "Computer",
    },
    {
      id: 4,
      icon: <GiConsoleController size={20} />,
      name: "Gaming",
    },
    {
      id: 5,
      icon: <FaCamera size={20} />,
      name: "Camera",
    },
    {
      id: 6,
      icon: <MdHeadphones size={20} />,
      name: "Headphones",
    },
  ];
  return (
    <section className="pt-4 px-[6px]">
      <div className="flex flex-col pb-2">
        <div className="flex gap-2 items-center">
          <span className="h-[24px] w-[24px] bg-[#DB4444]"></span>
          <span className="text-xs font-bold text-[#DB4444]">Categories</span>
        </div>
        <h3 className=" text-2xl md:text-[36px] font-[Inter]">Browse By Category</h3>
      </div>
      <div className="flex flex-wrap gap-4 justify-evenly">
        {categoryButtons.map((item) => (
          <button key={item.id} className=" border-[1px] border-gray-400 outline-none h-[125px] w-[170px] px-4 font-[Inter] rounded-md flex flex-col items-center justify-center gap-2">
            {item.icon}
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
