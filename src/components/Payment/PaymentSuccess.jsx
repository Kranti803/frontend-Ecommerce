import React from "react";
import successPng from "../../assets/successPng.png";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {

//   const navigate = useNavigate();

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="md:h-[500px] p-3 md:w-[500px] flex flex-col gap-16 items-center shadow-md rounded-sm">
        <img src={successPng} alt="" className="h-[48px] w-[48px]" />
        <h2 className="text-xl md:text-2xl font-semibold">
          Your payment has been done successfully .
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

export default PaymentSuccess;
