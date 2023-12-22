import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import GetDetails from "./GetDetails";
import AddProduct from "./AddProduct";
import GetAllUsers from "./GetAllUsers";
import GetAllOrders from "./GetAllOrders";
import GetAllProducts from "./GetAllProducts";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const [page, setPage] = useState("/admin/dashboard");

  const renderPage = () => {
    switch (page) {
      case "/admin/dashboard":
        return <GetDetails />;
      case "/admin/addproduct":
        return <AddProduct />;
      case "/admin/users":
        return <GetAllUsers />;
      case "/admin/products":
        return <GetAllProducts />;
      case "/admin/orders":
        return <GetAllOrders />;
      default:
        return <GetDetails />;
    }
  };

  return (
    <section className="min-h-screen">
      <div className=" flex h-12 justify-end gap-4 items-center bg-[#49108B] text-white px-2 ">
        <h2 className="text-sm">Hello, Kranti</h2>
        <button onClick={() => setSidebar(!sidebar)} className="md:hidden">
          <GiHamburgerMenu size={20} />
        </button>
      </div>
      <div className="flex gap-2 min-h-screen relative">
        <div
          className={`ease-in-out transition-all duration-600 absolute h-full md:relative md:min-h-screen translate-x-[-150%] md:translate-x-0 ${
            sidebar ? "translate-x-0" : " "
          } `}
        >
          <Sidebar setPage={setPage} setSidebar={setSidebar} />
        </div>
        <div className="flex-1 pt-7 px-4 pb-4">{renderPage()}</div>
      </div>
    </section>
  );
};

export default Dashboard;
