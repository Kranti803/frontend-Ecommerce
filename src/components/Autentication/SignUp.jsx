import { React,useState } from "react";
import ShoppingCartImg from "../../assets/shoppingCart.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/thunks/authThunk";
import LoadingButton from "../Layouts/LoadingButton";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

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
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter Name
            </label>
            <div className="mt-2">
              <input
                onChange={handleInputChange}
                id="name"
                name="name"
                value={formData.name}
                type="text"
                className="block w-full bg-[#F5F5F5] rounded-sm border-0 py-1.5 text-black shadow-sm placeholder:text-gray-400 border-none outline-none sm:text-sm sm:leading-6 px-2 "
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
                onChange={handleInputChange}
                value={formData.email}
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-sm border-0 bg-[#F5F5F5] py-1.5 text-black shadow-sm placeholder:text-gray-400 border-none outline-none sm:text-sm sm:leading-6 px-2 "
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
                onChange={handleInputChange}
                value={formData.password}
                id="password"
                name="password"
                type="password"
                minLength={8}
                required
                className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm border-none outline-none px-2 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-[#F5F5F5]"
              />
            </div>
          </div>

          <div>
            {loading ? (
              <LoadingButton
                className={
                  "flex w-full justify-center rounded-sm bg-[#BB4444] px-3 py-2 text-sm font-semibold leading-6 text-white border-none outline-none text-[poppins]"
                }
              />
            ) : (
              <button
                type="submit"
                className="flex w-full justify-center rounded-sm bg-[#DB4444] px-3 py-2 text-sm font-semibold leading-6 text-white border-none outline-none text-[poppins]"
              >
                Create Account
              </button>
            )}
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
