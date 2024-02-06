import React from "react";

const GetAllUsers = () => {
  return (
    <section className="bg-white rounded-md px-4 py-2">
      <h2 className=" pb-8 text-xl md:text-2xl text-center font-semibold">
        All Users
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="font-[Inter]">
            <tr className="mb-4">
              <th className="font-semibold p-3">
                Name
              </th>
              <th className="font-semibold p-3">
                Email
              </th>
              <th className="font-semibold p-3">
                Role
              </th>
              <th className="font-semibold p-3">
                Action
              </th>
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

const OrderItem = () => {
  return (
    <>
      <tr className="even:bg-[#f4f4f4] even:rounded-md">
        <td className="p-3 text-center">
          Kranti Kumar shah
        </td>
        <td className="p-3 text-center">
          Krantikumar803@gmail.com
        </td>
        <td className="p-3 text-center">user</td>
        <td className="p-3 text-center flex flex-col justify-center items-center gap-y-3">
          <button className="text-red-600 text-left hover:text-black">
            Change Role
          </button>
          <button className="text-red-600 text-left hover:text-black">
            Delete User
          </button>
        </td>
      </tr>
      <tr className="even:bg-[#f4f4f4] even:rounded-md">
        <td className="p-3 text-center">
          Kranti Kumar shah
        </td>
        <td className="p-3 text-center">
          Krantikumar803@gmail.com
        </td>
        <td className="p-3 text-center">user</td>
        <td className="p-3 text-center flex flex-col justify-center items-center gap-y-3">
          <button className="text-red-600 text-left hover:text-black">
            Change Role
          </button>
          <button className="text-red-600 text-left hover:text-black">
            Delete User
          </button>
        </td>
      </tr>
      <tr className="even:bg-[#f4f4f4] even:rounded-md">
        <td className="p-3 text-center">
          Kranti Kumar shah
        </td>
        <td className="p-3 text-center">
          Krantikumar803@gmail.com
        </td>
        <td className="p-3 text-center">user</td>
        <td className="p-3 text-center flex flex-col justify-center items-center gap-y-3">
          <button className="text-red-600 text-left hover:text-black">
            Change Role
          </button>
          <button className="text-red-600 text-left hover:text-black">
            Delete User
          </button>
        </td>
      </tr>
    </>
  );
};
