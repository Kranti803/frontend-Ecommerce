import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "../../constants";

const Header = () => {
  const isAuthenticated = true;
  const [nav, setNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // automatically close the side nav on larger screen
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (screenWidth > 768) setNav(false);
    };
    window.addEventListener("resize", handleResize);

    //clean up function for event listners..
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <nav className="flex items-center justify-between h-[70px] px-[6px] md:px-4">
      <h2 className=" hidden md:block text-[18px] md:text-[24px] font-[700] font-[Inter]">
        DazzleMart
      </h2>
      <button onClick={() => setNav(true)} className="text-black md:hidden">
        <GiHamburgerMenu size={25} />
      </button>
      <ul className="hidden md:flex gap-8 font-[poppins]">
        {navLinks.map((item) => (
          <li key={item.id} className="text-[16px]">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
        {isAuthenticated ? (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
      <aside className="flex gap-4">
        <div className="flex gap-1 rounded-sm bg-[#F5F5F5] p-2">
          <input
            className=" text-xs outline-none bg-transparent"
            type="text"
            placeholder="What are you looking for ?"
          />
          <button>
            <IoIosSearch />
          </button>
        </div>
        <button>
          <FaRegHeart size={20} />
        </button>
        <button className="relative">
          <BsCart3 size={20} />
          <span className="font-semibold text-[#5e34d3] absolute top-[-30%] right-0">2</span>
        </button>
      </aside>

      {/**************************mobile nav ******************************/}
      <aside
        className={`text-white absolute h-full w-[60%] top-0 left-0 bg-black p-4 duration-200 ease-in ${
          nav ? "translate-x-[0%]" : "translate-x-[-150%]"
        }`}
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-[700] font-[Inter]">DazzleMart</h2>
          <button onClick={() => setNav(false)}>
            <IoMdClose size={25} />
          </button>
        </div>
        <ul className=" text-lg flex flex-col gap-14 py-8 font-[poppins]">
          {navLinks.map((item) => (
            <li onClick={() => setNav(false)} key={item.id}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
          {isAuthenticated ? (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          ) : (
            <li>
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
