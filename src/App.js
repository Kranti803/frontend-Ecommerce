import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layouts/Footer";
import NotFound from "./components/NotFound/NotFound";
import Login from './components/Autentication/Login'
import SignUp from "./components/Autentication/SignUp";
import User from "./components/User/User";
import Cart from "./components/Cart/Cart";
import BillingDetails from "./components/BillingDetails/BillingDetails";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Wishlist from "./components/Wishlist/Wishlist";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<User />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/billingdetails" element={<BillingDetails />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
