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
          <thead className="font-[poppins]">
            <tr className="grid grid-cols-5 gap-24 place-items-center mb-4">
              <th className="font-normal">Item</th>
              <th className="font-normal">Status</th>
              <th className="font-normal">Quantity</th>
              <th className="font-normal">Price</th>
              <th className="font-normal">Action</th>
            </tr>
          </thead>
          <tbody className="">
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
    <tr className="grid grid-cols-5 place-items-center gap-24 even:bg-[#f4f4f4]">
      <td className="py-4">{item.name}</td>
      <td
        className={`${item.status === "Processing" ? "text-red-600" : "text-green-600"} py-4`}
      >
        {item.status}
      </td>
      <td className="py-4">{item.quantity}</td>
      <td className="py-4">{`$${item.price}`}</td>
      <td className="py-4">
        <button className="text-red-600">Cancel</button>
      </td>
    </tr>
  );
};
