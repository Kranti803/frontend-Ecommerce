import React from "react";
import aboutImg from "../../assets/aboutImg.png";
import Services from "./../Home/Services";
const About = () => {
  return (
    <section className="min-h-screen p-4 lg:p-0 lg:w-[80%] m-auto mt-4">
      <div className=" flex flex-col md:flex-row gap-4 text-center md:text-left mb-8">
        <img src={aboutImg} alt="" className="w-full md:w-1/2 h-full" />
        <div className="w-full md:w-1/2">
          <h2 className="text-[30px] md:text-[54px] font-[Inter] pb-2">
            Our Story
          </h2>
          <p className=" text-sm md:text-base font-[poppins] pb-2">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="text-sm md:text-base font-[poppins]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
      </div>
      <Services />
    </section>
  );
};

export default About;
