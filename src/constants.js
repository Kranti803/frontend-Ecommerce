import { MdDashboard } from "react-icons/md";
import { FaSquarePlus, FaUser } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import { GrHistory } from "react-icons/gr";

export const navLinks = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "About",
        link: "/about"
    },
    {
        id: 3,
        name: "Contact",
        link: "/contact",
    },


];

export const sidebarLinks = [
    {
        id: 1,
        name: "Dashbaord",
        icon: <MdDashboard />,
        link: "/admin/dashboard",
    },
    {
        id: 2,
        name: "Add Product",
        icon: <FaSquarePlus />,
        link: "/admin/addproduct"
    },
    {
        id: 3,
        name: "Users",
        icon: <FaUser />,
        link: "/admin/users",
    },
    {
        id: 4,
        name: "All Products",
        icon: <BsStack />,
        link: "/admin/products",
    },
    {
        id: 5,
        name: "Orders",
        icon: <GrHistory />,
        link: "/admin/orders",
    },


];