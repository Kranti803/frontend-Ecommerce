import React from "react";
import { sidebarLinks } from "../../../constants";

const Sidebar = ({setPage,setSidebar}) => {
  console.log(setSidebar)

  return (
    <ul className="flex flex-col gap-12 pt-6 bg-[#49108B] min-h-screen text-white h-full px-4">
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
