import { React, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layouts/Footer";
import NotFound from "./components/Layouts/NotFound";
import Login from './components/Autentication/Login'
import SignUp from "./components/Autentication/SignUp";
import User from "./components/User/User";
import Cart from "./components/Cart/Cart";
import Orders from './components/Orders/Orders';
import BillingDetails from "./components/BillingDetails/BillingDetails";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "./redux/thunks/authThunk";
import VerifySuccess from "./components/Autentication/VerifySuccess";
import { clearError, clearMessage } from "./redux/slices/authSlice";
import ForgotPassword from "./components/Autentication/ForgotPassword";
import ResetPassword from "./components/Autentication/ResetPassword";
import ProtectedRoute from './utils/protectedRoute';
import PaymentSuccess from "./components/Payment/PaymentSuccess";
import Cancel from "./components/Payment/Cancel";
import AllProducts from "./components/All Products/AllProducts";


function App() {

  const { error, message, user, isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(getUserProfile())
  }, [dispatch])


  return (
    <Router>
      <Header />
      <ToastContainer position="top-left" />
      <Routes>

        {/* public routes  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/verifyemail/:id/:token" element={<VerifySuccess />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:resetToken" element={<ResetPassword />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/cancelpayment" element={<Cancel />} />
        <Route path="/allproducts" element={<AllProducts />} />



        {/* Protected routes */}
        <Route element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect={'/'} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<User />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/billingdetails" element={<BillingDetails />} />
        </Route>

        {/* Admin route */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user?.role === 'admin' ? true : false} />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
