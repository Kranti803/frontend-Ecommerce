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

export const productCategories = [
    {
        id: 1,
        name: "Mobiles",
    },
    {
        id: 2,
        name: "Laptop",
    },
    {
        id: 3,
        name: "Watch",
    },
    {
        id: 4,
        name: "Camera",
    },
    {
        id: 5,
        name: "Headphone",
    },
    {
        id: 6,
        name: "TV",
    },


];

export const productBrands = [
    {
        id: 1,
        name: "Samsung",
    },
    {
        id: 2,
        name: "Apple",
    },
    {
        id: 3,
        name: "Xiaomi",
    },
    {
        id: 4,
        name: "Oneplus",
    },
    {
        id: 5,
        name: "Nokia",
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