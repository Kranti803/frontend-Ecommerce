import React, { useState } from "react";
import ShoppingCartImg from "../../assets/shoppingCart.png";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/thunks/authThunk";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  return (
    <div className="flex h-[calc(100vh-45px)] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-14 w-auto"
          src={ShoppingCartImg}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-[Inter]">
          Forgot Password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="abc@gmail.com"
                className="block w-full bg-[#F5F5F5] rounded-sm border-0 py-1.5 text-black shadow-sm placeholder:text-gray-400 border-none outline-none sm:text-sm sm:leading-6 px-2 "
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-sm bg-[#DB4444] px-3 py-1.5 text-sm font-semibold leading-6 text-white border-none outline-none text-[poppins]"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
