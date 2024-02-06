import React from "react";
import img from "../../../assets/img2.jpg";

const OrderDetail = () => {
  return (
    <section className="bg-white rounded-md px-4 py-2 min-h-screen">
      <h2 className=" pb-8 text-xl md:text-2xl text-center font-semibold">
        Order Details
      </h2>
      <div className="overflow-x-auto">
        <h4 className="text-lg font-semibold font-[Inter]">User detail</h4>
        <div className="flex flex-col gap-y-2 mt-4 font-[poppins] border-b-[1px] border-gray-300">
          <p>User Id : </p>
          <p>Name : </p>
          <p>Email : </p>
          <p>Address : </p>
          <p>City : </p>
          <p>Phone : </p>
        </div>
        <div className="border-b-[1px] border-gray-300 mt-4">
          <h4 className="text-lg font-semibold font-[Inter]">Items Ordered</h4>
          <aside className="mt-4 flex flex-col gap-y-2 font-[poppins]">
            <p>Product Id : </p>
            <p>Name : </p>
            <p>Price : </p>
            <p>Quantity : </p>
            <p>Quantity : </p>
            <div className="font-[poppins] flex gap-x-2 items-center mb-2">
              <p>Product Image : </p>
              <img src={img} alt="" className="h-[80px] w-[80px] object-fill" />
            </div>
          </aside>
        </div>
        <div>
          <h4 className="text-lg font-semibold mt-4 font-[Inter]">
            Payment Information
          </h4>
          <aside className="mt-4 flex flex-col gap-y-2 font-[poppins]">
            <p>Payment Id : </p>
            <p>Status : </p>
            <p>Subtotal : </p>
            <p>Shipping Price : </p>
            <p>Total Price : </p>
            <p>Order Status : </p>
            <p>Paid At : </p>
            <p>Delivered At : </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default OrderDetail;
