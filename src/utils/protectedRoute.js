import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children, redirect = '/login', adminRoute = false, isAdmin = false }) => {


  if (!isAuthenticated) {
    return <Navigate to={redirect} />;
  }
  if (adminRoute && !isAdmin) {
    return <Navigate to={'/'} />
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;



