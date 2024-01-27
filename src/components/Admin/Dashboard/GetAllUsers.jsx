import React from "react";

const GetAllUsers = () => {
  return (
    <section className="bg-white rounded-md px-4 py-2">
      <h2 className=" pb-8 text-xl md:text-2xl text-center font-semibold">
        All Users
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="font-[poppins]">
            <tr className="flex justify-between mb-4 px-2">
              <th className="font-semibold">Name</th>
              <th className="font-semibold">Email</th>
              <th className="font-semibold">Role</th>
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

export default GetAllUsers;

const OrderItem = ({ item }) => {
  return (
    <>
      <tr className="flex justify-between items-center gap-x-8 even:bg-[#f4f4f4] even:rounded-md px-2">
        <td className="py-4">Kranti Kumar</td>
        <td className="py-4">Krantikumar803@gmail.com</td>
        <td className="py-4 pr-14">user</td>
        <td className="py-4 flex flex-col gap-3">
          <button className="text-red-600 text-left hover:text-black">Change Role</button>
          <button className="text-red-600 text-left hover:text-black">Delete User</button>
        </td>
      </tr>
      <tr className="flex justify-between gap-x-8 items-center even:bg-[#f4f4f4] even:rounded-md px-2">
        <td className="py-4">Kranti Kumar</td>
        <td className="py-4">Krantikumar803@gmail.com</td>
        <td className="py-4 pr-14">user</td>
        <td className="py-4 flex flex-col gap-3">
          <button className="text-red-600 text-left hover:text-black">Change Role</button>
          <button className="text-red-600 text-left hover:text-black">Delete User</button>
        </td>
      </tr>
    </>
  );
};
