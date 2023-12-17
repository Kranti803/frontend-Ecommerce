import React from "react";
import ShoppingCartImg from "../../assets/shoppingCart.png";
import { Link } from "react-router-dom";
import GoogleIcon from '../../assets/Icon-Google.png'

const SignUp = () => {
  return (
    <div className="flex min-h-[calc(100vh-75px)] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-14 w-auto"
          src={ShoppingCartImg}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-[Inter]">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter Name
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
              Enter Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-sm border-0 bg-[#F5F5F5] py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 border-none outline-none sm:text-sm sm:leading-6 px-2 "
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-black"
              >
                Enter Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bprder-none outline-none px-2 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-[#F5F5F5]"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-sm bg-[#DB4444] px-3 py-1.5 text-sm font-semibold leading-6 text-white border-none outline-none text-[poppins]"
            >
              Create Account
            </button>
          </div>
          <div>
            <Link
              type="submit"
              className="flex gap-4 w-full items-center justify-center rounded-sm text-black px-3 py-1.5 text-sm font-semibold leading-6 border-2 border-gray-300 outline-none text-[poppins]"
            >
            <img src={GoogleIcon} alt="" className="h-[20px] w-[20px]" />
              <span>Sign up with google</span>
            </Link>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already Registered ?{" "}
          <Link
            to={"/login"}
            className="font-semibold leading-6 text-[#DB4444]"
          >
            Log In Now{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
