import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  const isAuthenticated = false;
  return (
    <section className="p-4 lg:p-0 lg:w-[80%] m-auto mt-4 min-h-screen">
      <div className="flex justify-end items-end flex-col">
        <h1 className="text-xs font-semibold font-[poppins]">
          Welcome, <span className="text-[#DB4444]">Kranti</span>
        </h1>
        {isAuthenticated && (
          <Link
            to={"/dashboard"}
            className="bg-[#DB4444] px-3 rounded-sm text-white font-[Inter] py-2"
          >
            Dashboard
          </Link>
        )}
      </div>
      <div>
        <h2 className="text-xl font-[Inter] text-[#BB4444]">Edit Profile</h2>
      </div>
      <div>
        <form>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                className="block w-full bg-[#F5F5F5] rounded-sm border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 border-none outline-none sm:text-sm sm:leading-6 px-2 "
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full bg-[#F5F5F5] rounded-sm border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 border-none outline-none sm:text-sm sm:leading-6 px-2 "
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="oldpassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Current Password
            </label>
            <div className="mt-2">
              <input
                id="oldpassword"
                name="oldpassword"
                type="password"
                className="block w-full bg-[#F5F5F5] rounded-sm border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 border-none outline-none sm:text-sm sm:leading-6 px-2 "
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="newpassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              New Password
            </label>
            <div className="mt-2">
              <input
                id="newpassword"
                name="newpassword"
                type="password"
                className="block w-full bg-[#F5F5F5] rounded-sm border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 border-none outline-none sm:text-sm sm:leading-6 px-2 "
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-3 py-2 text-white font-[Inter] rounded-sm bg-[#DB4444] w-full border-none outline-none mt-4"
          >
            Update Profile
          </button>
        </form>
      </div>
      <div className=" mt-4 mb-8 w-full">
        {/* <h2 className="text-[#DB4444] mb-4">Hello, Admin</h2> */}
      </div>
    </section>
  );
};

export default User;
