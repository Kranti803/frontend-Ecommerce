import React from "react";
import { sidebarLinks } from "../../../constants";

const Sidebar = ({setPage,setSidebar, sidebar}) => {

  return (
    <ul className={`flex flex-col gap-12 pt-12 bg-[#fff] ${sidebar?"bg-[#e05607] text-white":"bg-[#fff]"} min-h-screen px-4`}>
      {sidebarLinks.map((item) => (
        <li key={item?.id}>
          <button
            className="flex hover:bg-[#DB4444] hover:text-white py-1 px-2 items-center gap-4 w-full rounded-sm "
            onClick={()=>setPage(item.link) & setSidebar(false)}
          >
            {item?.icon}
            <h2 className="">{item?.name}</h2>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
