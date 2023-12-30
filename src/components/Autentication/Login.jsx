import React from "react";
import ShoppingCartImg from '../../assets/shoppingCart.png'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    
      <div className="flex h-[calc(100vh-75px)] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-14 w-auto"
            src={ShoppingCartImg}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-[Inter]">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
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
                  autoComplete="email"
                  required
                  className="block w-full bg-[#F5F5F5] rounded-sm border-0 py-1.5 text-black shadow-sm placeholder:text-gray-400 border-none outline-none sm:text-sm sm:leading-6 px-2 "
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-black"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to={'/forgotpassword'}
                    className="font-semibold text-[#DB4444]"
                  >
                    Forgot password ?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full bg-[#F5F5F5] rounded-sm border-0 py-1.5 text-gray-900 shadow-sm bprder-none outline-none px-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-sm bg-[#DB4444] px-3 py-1.5 text-sm font-semibold leading-6 text-white border-none outline-none text-[poppins]"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not Registered Yet ?{" "}
            <Link
              to={'/signup'}
              className="font-semibold leading-6 text-[#DB4444]"
            >
              Sign Up Now{" "}
            </Link>
          </p>
        </div>
      </div>
  );
};

export default Login;
