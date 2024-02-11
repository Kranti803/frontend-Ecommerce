import React from "react";

const Orders = () => {
  const orders = [
    {
      id: 1,
      name: "Headphones",
      status: "Processing",
      quantity: 4,
      price: 100,
    },
    {
      id: 2,
      name: "Camera",
      status: "Placed",
      quantity: 4,
      price: 110,
    },
    {
      id: 3,
      name: "shoes",
      status: "Processing",
      quantity: 4,
      price: 110,
    },
    {
      id: 4,
      name: "Another Shoes",
      status: "Processing",
      quantity: 4,
      price: 110,
    },
  ];
  return (
    <section className="min-h-screen mt-6 p-2 sm:p-4 lg:p-0 lg:w-[80%] m-auto">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="font-[Inter]">
            <tr className="mb-4">
              <th className="font-semibold p-3">Item</th>
              <th className="font-semibold p-3">Status</th>
              <th className="font-semibold p-3">Quantity</th>
              <th className="font-semibold p-3">Price</th>
              <th className="font-semibold p-3">Action</th>
            </tr>
          </thead>
          <tbody className="font-[poppins]">
            {orders.map((item) => (
              <OrderItem item={item} key={item.id} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;

const OrderItem = ({ item }) => {
  return (
    <tr className="even:bg-[#f4f4f4] even:rounded-md">
      <td className="p-3 text-center">{item.name}</td>
      <td
        className={`${
          item.status === "Processing" ? "text-red-600" : "text-green-600"
        } p-3 text-center`}
      >
        {item.status}
      </td>
      <td className="p-3 text-center">{item.quantity}</td>
      <td className="p-3 text-center">{`$${item.price}`}</td>
      <td className="p-3 text-center">
        <button className="text-red-600">Cancel</button>
      </td>
    </tr>
  );
};
