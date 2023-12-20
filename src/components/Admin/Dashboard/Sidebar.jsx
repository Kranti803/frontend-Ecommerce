import React from "react";
import { sidebarLinks } from "../../../constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full">
      <ul className="flex flex-col min-h-screen justify-evenly mx-3">
        {sidebarLinks.map((item) => (
          <li key={item?.id} className="">
            <Link to={item?.link} className="flex px-2 py-1 items-center gap-2 bg-[#DB4444] text-white w-full rounded-sm ">
              {item?.icon}
              <span>{item?.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
