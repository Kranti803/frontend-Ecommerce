import React from "react";
import img4 from "../../../assets/img4.jpg";
const GetAllProducts = ({ setPage }) => {
  return (
    <section className="bg-white rounded-md px-4 py-2">
      <h2 className=" pb-8 text-xl md:text-2xl text-center font-semibold">
        All Products
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="font-[Inter]">
            <tr className="mb-4">
              <th className="font-semibold p-3">Name</th>
              <th className="font-semibold p-3">Image</th>
              <th className="font-semibold p-3">Price</th>
              <th className="font-semibold p-3">Action</th>
            </tr>
          </thead>
          <tbody className="font-[poppins]">
            <OrderItem setPage={setPage} />
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GetAllProducts;

const OrderItem = ({ item,setPage }) => {
  return (
    <>
      <tr className="even:bg-[#f4f4f4] even:rounded-md p-3">
        <td className="p-3 text-center">Kranti Kumar</td>
        <td className="h-[58px] w-[78px]">
          <img src={img4} alt="" className=" w-full h-full object-fill" />
        </td>
        <td className="p-3 text-center">$500</td>
        <td className="p-3 text-center flex flex-col justify-center items-center gap-y-3">
          <button onClick={()=>setPage('/admin/updateproduct')} className="text-red-600 text-left hover:text-black">
            Update Product
          </button>
          <button className="text-red-600 text-left hover:text-black">
            Delete Product
          </button>
        </td>
      </tr>
      <tr className="even:bg-[#f4f4f4] even:rounded-md p-3">
        <td className="p-3 text-center">Kranti Kumar</td>
        <td className="h-[58px] w-[78px]">
          <img src={img4} alt="" className=" w-full h-full object-fill" />
        </td>
        <td className="p-3 text-center">$500</td>
        <td className="p-3 text-center flex flex-col justify-center items-center gap-y-3">
          <button className="text-red-600 text-left hover:text-black">
            Update Product
          </button>
          <button className="text-red-600 text-left hover:text-black">
            Delete Product
          </button>
        </td>
      </tr>
      <tr className="even:bg-[#f4f4f4] even:rounded-md p-3">
        <td className="p-3 text-center">Kranti Kumar</td>
        <td className="h-[58px] w-[78px]">
          <img src={img4} alt="" className=" w-full h-full object-fill" />
        </td>
        <td className="p-3 text-center">$500</td>
        <td className="p-3 text-center flex flex-col justify-center items-center gap-y-3">
          <button className="text-red-600 text-left hover:text-black">
            Update Product
          </button>
          <button className="text-red-600 text-left hover:text-black">
            Delete Product
          </button>
        </td>
      </tr>
      <tr className="even:bg-[#f4f4f4] even:rounded-md p-3">
        <td className="p-3 text-center">Kranti Kumar</td>
        <td className="h-[58px] w-[78px]">
          <img src={img4} alt="" className=" w-full h-full object-fill" />
        </td>
        <td className="p-3 text-center">$500</td>
        <td className="p-3 text-center flex flex-col justify-center items-center gap-y-3">
          <button className="text-red-600 text-left hover:text-black">
            Update Product
          </button>
          <button className="text-red-600 text-left hover:text-black">
            Delete Product
          </button>
        </td>
      </tr>
    </>
  );
};
