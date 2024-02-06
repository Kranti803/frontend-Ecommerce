import React from "react";

const GetAllOrders = ({ setPage }) => {
  const status = "Placed";
  return (
    <section className="bg-white rounded-md px-4 py-2">
      <h2 className=" pb-8 text-xl md:text-2xl text-center font-semibold">
        All Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="font-[Inter]">
            <tr className="mb-4">
              <th className="font-semibold p-3">Order ID</th>
              <th className="font-semibold p-3">Status</th>
              <th className="font-semibold p-3">Quantity</th>
              <th className="font-semibold p-3">Amount</th>
              <th className="font-semibold p-3">Action</th>
            </tr>
          </thead>
          <tbody className="font-[poppins]">
            <tr className="even:bg-[#f4f4f4] even:rounded-md">
              <td className="p-3 text-center">fd5fd54cx4sg5d4sd</td>
              <td
                className={`p-3 text-center ${
                  status === "Placed" ? "text-green-500" : "text-red-500"
                }`}
              >
                Placed
              </td>
              <td className="p-3 text-center">5</td>
              <td className="p-3 text-center">$6577</td>
              <td className="p-3 flex flex-col gap-y-3 justify-center items-center text-center">
                <button className="text-red-600 text-left hover:text-black">
                  Change Status
                </button>
                <button className="text-red-600 text-left hover:text-black">
                  Delete Order
                </button>
                <button
                  className="text-red-600 text-left hover:text-black"
                  onClick={() => setPage("/admin/orderdetail")}
                >
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
