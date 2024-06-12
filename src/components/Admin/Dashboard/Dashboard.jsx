import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import GetDetails from "./GetDetails";
import AddProduct from "./AddProduct";
import GetAllUsers from "./GetAllUsers";
import GetAllOrders from "./GetAllOrders";
import GetAllProducts from "./GetAllProducts";
import { useSelector } from "react-redux";
import OrderDetail from "./OrderDetail";
import UpdateProduct from "./UpdateProduct";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const [page, setPage] = useState("/admin/dashboard");
  const [productId, setProductId] = useState("");
  const [orderId, setOrderId] = useState("");

  const renderPage = () => {
    switch (page) {
      case "/admin/dashboard":
        return <GetDetails />;
      case "/admin/addproduct":
        return <AddProduct />;
      case "/admin/users":
        return <GetAllUsers />;
      case "/admin/products":
        return <GetAllProducts setPage={setPage} setProductId={setProductId} />;
      case "/admin/orders":
        return <GetAllOrders setPage={setPage} setOrderId={setOrderId} />;
      case "/admin/orderdetail":
        return <OrderDetail orderId={orderId} />;
      case "/admin/updateproduct":
        return <UpdateProduct productId={productId} />;
      default:
        return <GetDetails />;
    }
  };

  const { user } = useSelector((state) => state.auth);

  return (
    <section className="min-h-screen bg-[#f0f0f0]">
      <div className=" flex h-12 justify-end gap-4 items-center bg-[#fefefe] px-2 ">
        <h2 className="text-sm text-[#e05607] font-[poppins]">
          Hello, {user?.name}
        </h2>
        <button
          onClick={() => setSidebar(!sidebar)}
          className="md:hidden text-[#e05607]"
        >
          <GiHamburgerMenu size={20} />
        </button>
      </div>
      <div className="flex gap-2 min-h-screen relative">
        <div
          className={`ease-in-out transition-all duration-600 absolute md:relative md:min-h-screen  md:translate-x-0 md:mr-2 ${
            sidebar ? "translate-x-0 " : "translate-x-[-150%]"
          } `}
        >
          <Sidebar
            setPage={setPage}
            setSidebar={setSidebar}
            sidebar={sidebar}
          />
        </div>
        <div className="flex-1 h-screen no-scrollbar pt-7 px-4 pb-4 overflow-y-auto">
          {renderPage()}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
