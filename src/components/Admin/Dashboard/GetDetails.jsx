import React from "react";

const GetDetails = () => {
  return (
    <section className="bg-[#ffff] rounded-md px-4 py-2 min-h-screen">
      <h2 className=" pb-8 text-xl md:text-2xl text-center font-semibold">
        Dashboard
      </h2>
      <div className="">
        <aside className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-16">
          <div className="w-full md:w-[50%] h-28 text-md font-semibold bg-[#e05607cf] text-white rounded-sm shadow-md flex flex-col justify-evenly items-center">
            <p className="tracking-wider">Total Products</p>
            <p className="tracking-wider">105</p>
          </div>
          <div className="w-full text-md  font-semibold md:w-[50%] h-28 rounded-sm shadow-md bg-[#1bb91bc8] text-white flex flex-col justify-evenly items-center">
            <p className="tracking-wider">Total Revenue</p>
            <p className="tracking-wider">$4412</p>
          </div>
          <div className="w-full text-md  font-semibold md:w-[50%] h-28 rounded-sm shadow-md bg-[#d69d0db7] text-white flex flex-col justify-evenly items-center">
            <p className="tracking-wider">Total Users</p>
            <p className="tracking-wider">100</p>
          </div>
          <div className="w-full text-md  font-semibold md:w-[50%] h-28 rounded-sm shadow-md bg-[#0e7fb3b9] text-white flex flex-col justify-evenly items-center">
            <p className="tracking-wider">Total Orders</p>
            <p className="tracking-wider">500</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default GetDetails;
