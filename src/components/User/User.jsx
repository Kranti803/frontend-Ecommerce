import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateUserProfile } from "../../redux/thunks/userThunk";
import { toast } from "react-toastify";
import { clearError, clearMessage } from "../../redux/slices/userSlice";
import LoadingButton from "./../Layouts/LoadingButton";

const User = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { error, message, updatedUser,loading } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(formData));
    setFormData({ name: "", email: "", currentPassword: "", newPassword: "" });
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error, message]);
  return (
    <section className="p-4 lg:p-0 lg:w-[80%] m-auto mt-4 min-h-screen">
      <div className="flex justify-end items-end flex-col">
        <h1 className="text-xs font-semibold font-[poppins]">
          Welcome,{" "}
          <span className="text-[#DB4444]">
            {updatedUser?.name || user?.name}
          </span>
        </h1>
        {user?.role === "admin" && (
          <Link
            to={"/admin/dashboard"}
            className="bg-[#DB4444] px-3 rounded-sm text-white font-[Inter] py-2 mt-2"
          >
            Dashboard
          </Link>
        )}
      </div>
      <div>
        <h2 className="text-xl font-[Inter] text-[#BB4444]">Edit Profile</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
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
                value={formData.name}
                onChange={handleInputChange}
                className="block w-full bg-[#F5F5F5] rounded-sm border-0 py-1.5 text-black shadow-sm placeholder:text-gray-400 border-none outline-none sm:text-sm sm:leading-6 px-2 "
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
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full bg-[#F5F5F5] rounded-sm border-0 py-1.5 text-black shadow-sm placeholder:text-gray-400 border-none outline-none sm:text-sm sm:leading-6 px-2 "
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
                name="currentPassword"
                type="password"
                value={formData.currentPassword}
                onChange={handleInputChange}
                className="block w-full bg-[#F5F5F5] rounded-sm border-0 py-1.5 text-black shadow-sm placeholder:text-gray-400 border-none outline-none sm:text-sm sm:leading-6 px-2 "
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
                name="newPassword"
                type="password"
                value={formData.newPassword}
                onChange={handleInputChange}
                minLength={8}
                className="block w-full bg-[#F5F5F5] rounded-sm border-0 py-1.5 text-black shadow-sm placeholder:text-gray-400 border-none outline-none sm:text-sm sm:leading-6 px-2 "
              />
            </div>
          </div>

          {loading ? (
            <LoadingButton
              className={
                "flex w-full justify-center rounded-sm bg-[#BB4444] px-3 py-2 mt-4 text-sm font-semibold leading-6 text-white border-none outline-none text-[poppins]"
              }
            />
          ) : (
            <button
              type="submit"
              className="px-3 py-2 text-white font-[Inter] rounded-sm bg-[#DB4444] w-full border-none outline-none mt-4"
            >
              Update Profile
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default User;
