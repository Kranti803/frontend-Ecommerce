import React from "react";
import img4 from '../../../assets/img4.jpg'
const GetAllProducts = () => {
  return (
    <section className="bg-white rounded-md px-4 py-2">
      <h2 className=" pb-8 text-xl md:text-2xl text-center font-semibold">
        All Products
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="font-[poppins]">
            <tr className="flex justify-between mb-4 px-2">
              <th className="font-semibold">Name</th>
              <th className="font-semibold">Image</th>
              <th className="font-semibold">Price</th>
              <th className="font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="font-[poppins]">
            <OrderItem />
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GetAllProducts;

const OrderItem = ({ item }) => {
  return (
    <>
      <tr className="flex justify-between items-center gap-x-8 even:bg-[#f4f4f4] even:rounded-md px-2">
        <td className="py-4">Kranti Kumar</td>
        <td className="py-4 pl-8">
          <img src={img4} alt="" className="h-[58px] w-[58px]" />
        </td>
        <td className="py-4 pl-20">$ 500</td>
        <td className="py-4 flex flex-col gap-3">
          <button className="text-red-600 text-left hover:text-black">Update Product</button>
          <button className="text-red-600 text-left hover:text-black">Delete Product</button>
        </td>
      </tr>
      <tr className="flex justify-between items-center gap-x-8 even:bg-[#f4f4f4] even:rounded-md px-2">
        <td className="py-4">Kranti Kumar</td>
        <td className="py-4 pl-8">
          <img src={img4} alt="" className="h-[58px] w-[58px]" />
        </td>
        <td className="py-4 pl-20">$ 500</td>
        <td className="py-4 flex flex-col gap-3">
          <button className="text-red-600 text-left hover:text-black">Update Product</button>
          <button className="text-red-600 text-left hover:text-black">Delete Product</button>
        </td>
      </tr>
      <tr className="flex justify-between items-center gap-x-8 even:bg-[#f4f4f4] even:rounded-md px-2">
        <td className="py-4">Kranti Kumar</td>
        <td className="py-4 pl-8">
          <img src={img4} alt="" className="h-[58px] w-[58px]" />
        </td>
        <td className="py-4 pl-20">$ 500</td>
        <td className="py-4 flex flex-col gap-3">
          <button className="text-red-600 text-left hover:text-black">Update Product</button>
          <button className="text-red-600 text-left hover:text-black">Delete Product</button>
        </td>
      </tr>
      <tr className="flex justify-between items-center gap-x-8 even:bg-[#f4f4f4] even:rounded-md px-2">
        <td className="py-4">Kranti Kumar</td>
        <td className="py-4 pl-8">
          <img src={img4} alt="" className="h-[58px] w-[58px]" />
        </td>
        <td className="py-4 pl-20">$ 500</td>
        <td className="py-4 flex flex-col gap-3">
          <button className="text-red-600 text-left hover:text-black">Update Product</button>
          <button className="text-red-600 text-left hover:text-black">Delete Product</button>
        </td>
      </tr>
    </>
  );
};
