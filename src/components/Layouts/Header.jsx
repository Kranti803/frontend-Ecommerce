import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/thunks/authThunk";
import { toast } from "react-toastify";
import { clearError, clearMessage } from "../../redux/slices/cartSlice";

const Header = () => {
  const [nav, setNav] = useState(false);

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { products, error, message } = useSelector((state) => state.cart);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="flex items-center justify-between h-[70px] px-[6px] md:px-2">
      <h2 className=" hidden md:block text-[18px] md:text-[24px] font-[700] font-[Inter]">
        Exclusive
      </h2>
      <button onClick={() => setNav(true)} className="text-black md:hidden">
        <RxHamburgerMenu size={25} />
      </button>
      <ul className="hidden md:flex gap-4 font-[poppins]">
        {navLinks.map((item) => (
          <li key={item.id} className="text-[16px]">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
      <aside className="flex gap-2 sm:gap-4">
        <div className="flex gap-1 w-full rounded-sm bg-[#F5F5F5] p-2">
          <input
            className=" text-xs outline-none bg-transparent w-full"
            type="text"
            placeholder="Search products"
          />
          <button>
            <IoIosSearch />
          </button>
        </div>
        <Link to={"/wishlist"} className="flex items-center">
          <FaRegHeart size={20} />
        </Link>
        <Link to={"/cart"} className="relative flex items-center">
          <BsCart3 size={20} />
          <span className="font-semibold bg-[#DB4444] absolute top-[-13%] right-0 h-[16px] w-[16px] rounded-full text-center text-[10px] text-white">
            {products.length}
          </span>
        </Link>
      </aside>

      {/**************************mobile nav ******************************/}
      <aside
        className={`text-white absolute z-10 h-full w-[60%] top-0 left-0 bg-black p-4 duration-200 ease-in ${
          nav ? "translate-x-[0%]" : "translate-x-[-150%]"
        }`}
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-[700] font-[Inter]">Exclusive</h2>
          <button onClick={() => setNav(false)}>
            <IoMdClose size={25} />
          </button>
        </div>
        <ul className=" text-lg flex flex-col items-center gap-14 py-8 font-[poppins]">
          {navLinks.map((item) => (
            <li onClick={() => setNav(false)} key={item.id}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
          {isAuthenticated ? (
            <>
              <li onClick={() => setNav(false)}>
                <Link to="/profile">Profile</Link>
              </li>
              <li onClick={() => setNav(false)}>
                <Link to="/orders">Orders</Link>
              </li>
              <li onClick={() => setNav(false)}>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          ) : (
            <li onClick={() => setNav(false)}>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </aside>
      {/**************************mobile nav ******************************/}
    </nav>
  );
};

export default Header;
