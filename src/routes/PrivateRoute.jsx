import React, { use } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Shared/Loading";

const PrivateRoute = ({ children }) => {
  const { user,loading } = use(AuthContext);
  const location = useLocation();

  if(loading) {
    return <Loading></Loading>
  }

  if (!user) {
    return <Navigate to="/signIn" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
