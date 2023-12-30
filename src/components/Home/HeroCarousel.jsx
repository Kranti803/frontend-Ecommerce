import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../assets/img1.jpg";
import Image2 from "../../assets/img2.jpg";
import Image3 from "../../assets/img3.jpg";
import Image4 from "../../assets/img4.jpg";

const Hero = () => {
  const carousel = [
    {
      Image: Image1,
    },
    {
      Image: Image2,
    },
    {
      Image: Image3,
    },
    {
      Image: Image4,
    },
  ];
  return (
    <Carousel
      autoPlay={true}
      interval={2000}
      showArrows={false}
      showIndicators={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
    >
      {carousel.map((item,index) => (
        <div
          key={index}
          className=" relative h-[40vh] md:h-[55vh] bg-black flex text-white font-[Inter]"
        >
          <img
            className="w-full bg-center h-full bg-black"
            src={item.Image}
            alt=""
          />
          <div className="absolute h-full w-full top-[40%] text-white font-bold text-3xl md:text-4xl">
            <h2 className="tracking-wide line pb-4">Upto 10% off Voucher</h2>
            <h5 className=" text-2xl">
              Shop Now !!
            </h5>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
