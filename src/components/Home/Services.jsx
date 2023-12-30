import React from "react";
import vanPng from "../../assets/vanPng.png";
import shieldPng from "../../assets/shielPng.png";
import headphonePng from "../../assets/headphonePng.png";
const Services = () => {
  const services = [
    {
      id: 1,
      png: vanPng,
      title: "FREE AND FAST DELIVERY",
      subTitle: "Free And Fast Delivery over $100",
    },
    {
      id: 2,
      png: headphonePng,
      title: "24/7 CUSTOMER SERVICE",
      subTitle: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      png: shieldPng,
      title: "MONEY BACK GUARANTEE",
      subTitle: "We return money within 30 days",
    },
  ];
  return (
    <section className="grid max-[280px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-3 px-2 my-4">
      {services.map((item) => (
        <div
          className="font-[poppins] flex items-center flex-col gap-2"
          key={item.id}
        >
          <img
            src={item.png}
            alt=""
            className="h-[40px] w-[40px] bg-[#e1e0e2] rounded-full p-1 object-contain text-white"
          />
          <div>
            <h4 className="text-sm font-semibold">{item.title}</h4>
            <p className="text-xs">{item.subTitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
