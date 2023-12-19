import React from "react";
import gamepad from '../../assets/gamepad.png'

const BillingDetails = () => {
  return (
    <section className="min-h-[calc(100vh-70px)] p-4 lg:p-0 lg:w-[80%] m-auto">
      <h2 className="text-xl md:text-2xl font-[inter] font-semibold">
        Billing Details
      </h2>
      <div className="flex flex-col gap-4 md:flex-row mt-3">
        <form className="flex flex-col w-full md:w-1/2">
          <label htmlFor="name" className="text-xs font-[poppins] pb-[2px]">
            Name
          </label>
          <input
            className="border-none outline-none bg-gray-200 px-3 py-1 rounded-sm mb-2"
            id="name"
            name="name"
            type="text"
          />
          <label htmlFor="name" className="text-xs font-[poppins] pb-[2px]">
            Email
          </label>
          <input
            className="border-none outline-none bg-gray-200 px-3 py-1 rounded-sm mb-2"
            id="name"
            name="name"
            type="text"
          />
          <label htmlFor="name" className="text-xs font-[poppins] pb-[2px]">
            Address
          </label>
          <input
            className="border-none outline-none bg-gray-200 px-3 py-1 rounded-sm mb-2"
            id="name"
            name="name"
            type="text"
          />
          <label htmlFor="name" className="text-xs font-[poppins] pb-[2px]">
            City/Town
          </label>
          <input
            className="border-none outline-none bg-gray-200 px-3 py-1 rounded-sm mb-2"
            id="name"
            name="name"
            type="text"
          />
          <label htmlFor="name" className="text-xs font-[poppins] pb-[2px]">
            Phone
          </label>
          <input
            className="border-none outline-none bg-gray-200 px-3 py-1 rounded-sm mb-2"
            id="name"
            name="name"
            type="text"
          />
        </form>
        <div className="w-full flex flex-col gap-3 md:w-1/2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex gap-2 items-center">
              <img src={gamepad} className="h-[40px] w-[40px]" alt="" />
              <p className="text-sm">Item 1</p>
            </div>
            <div>
              <p>$400</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex gap-2 items-center">
              <img src={gamepad} className="h-[40px] w-[40px]" alt="" />
              <p className="text-sm">Item 1</p>
            </div>
            <div>
              <p>$400</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm border-b-2 border-gray-200">
            <span>Subtotal</span>
            <span>$400</span>
          </div>
          <div className="flex items-center justify-between text-sm border-b-2 border-gray-200">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex items-center justify-between text-sm border-b-2 border-gray-200">
            <span>Total</span>
            <span>$400</span>
          </div>
          <div className="flex items-center text-sm">
            <input className="" type="checkbox" name="" id="" />
            <label htmlFor="">Pay using Stripe</label>
          </div>
          <div className="flex-items-center text-sm">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Cash On Delivery</label>
          </div>
          <div className="flex items-center w-full justify-center">
            <button className="px-2 py-1 bg-[#DB4444] font-[inter] text-white text-sm rounded-sm mt-2 w-full md:w-fit">Proceed To Payment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingDetails;
