import React from "react";
import cancel3 from "../../assets/cancel3.png";
import { Link } from "react-router-dom";

const Cancel = () => {

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="md:h-[500px] p-3 md:w-[500px] flex flex-col gap-16 items-center shadow-md rounded-sm">
        <img src={cancel3} alt="" className="h-[48px] w-[48px] bg-inherit" />
        <h2 className="text-xl md:text-2xl font-semibold text-center">
          Your payment has been cancelled !
        </h2>
        <Link
          className="bg-[#DB4444] w-full flex justify-center py-2 text-white text-lg rounded-sm"
          to={"/"}
        >
          Return to homepage
        </Link>
      </div>
    </section>
  );
};

export default Cancel;
