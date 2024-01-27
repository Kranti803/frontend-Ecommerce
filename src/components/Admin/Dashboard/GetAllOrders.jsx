import React from "react";

const GetAllOrders = () => {
  return (
    <section className="bg-white rounded-md px-4 py-2">
      <h2 className=" pb-8 text-xl md:text-2xl text-center font-semibold">
        All Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="font-poppins font-semibold text-xl">
            <tr className="flex items-center justify-between gap-x-14 mb-4 px-2">
              <th className="font-semibold min-w-[100px]">Order ID</th>
              <th className="font-semibold min-w-[100px]">Status</th>
              <th className="font-semibold min-w-[100px]">Quantity</th>
              <th className="font-semibold min-w-[100px]">Amount</th>
              <th className="font-semibold min-w-[100px]">Action</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            <tr className="flex justify-between items-center even:bg-[#f4f4f4] even:rounded-md px-2">
              <td className="py-4 ">fd5fd54cx4sg5d4sd</td>
              <td className="py-4 min-w-[100px] pr-20">Processing</td>
              <td className="py-4 min-w-[100px]">5</td>
              <td className="py-4 min-w-[100px]">$6577</td>
              <td className="py-4 flex flex-col gap-3 min-w-[100px]">
                <button className="text-red-600 text-left hover:text-black">
                  Change Status
                </button>
                <button className="text-red-600 text-left hover:text-black">
                  Delete Order
                </button>
                <button className="text-red-600 text-left hover:text-black">
                  Details
                </button>
              </td>
            </tr>
            <tr className="flex justify-between items-center even:bg-[#f4f4f4] even:rounded-md px-2">
              <td className="py-4 ">fd5fd54cx4sg5d4sd</td>
              <td className="py-4 min-w-[100px] pr-20">Processing</td>
              <td className="py-4 min-w-[100px]">5</td>
              <td className="py-4 min-w-[100px]">$6577</td>
              <td className="py-4 flex flex-col gap-3 min-w-[100px]">
                <button className="text-red-600 text-left hover:text-black">
                  Change Status
                </button>
                <button className="text-red-600 text-left hover:text-black">
                  Delete Order
                </button>
                <button className="text-red-600 text-left hover:text-black">
                  Details
                </button>
              </td>
            </tr>
            <tr className="flex justify-between items-center even:bg-[#f4f4f4] even:rounded-md px-2">
              <td className="py-4 ">fd5fd54cx4sg5d4sd</td>
              <td className="py-4 min-w-[100px] pr-20">Processing</td>
              <td className="py-4 min-w-[100px]">5</td>
              <td className="py-4 min-w-[100px]">$6577</td>
              <td className="py-4 flex flex-col gap-3 min-w-[100px]">
                <button className="text-red-600 text-left hover:text-black">
                  Change Status
                </button>
                <button className="text-red-600 text-left hover:text-black">
                  Delete Order
                </button>
                <button className="text-red-600 text-left hover:text-black">
                  Details
                </button>
              </td>
            </tr>
            <tr className="flex justify-between items-center even:bg-[#f4f4f4] even:rounded-md px-2">
              <td className="py-4 ">fd5fd54cx4sg5d4sd</td>
              <td className="py-4 min-w-[100px] pr-20">Processing</td>
              <td className="py-4 min-w-[100px]">5</td>
              <td className="py-4 min-w-[100px]">$6577</td>
              <td className="py-4 flex flex-col gap-3 min-w-[100px]">
                <button className="text-red-600 text-left hover:text-black">
                  Change Status
                </button>
                <button className="text-red-600 text-left hover:text-black">
                  Delete Order
                </button>
                <button className="text-red-600 text-left hover:text-black">
                  Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GetAllOrders;
