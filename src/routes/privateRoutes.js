import React, { Component, useContext } from "react";
import { Navigate, Outlet, Route, useLocation } from "react-router-dom";
import { CURRENT_USER } from "../constants/preferenceKey";
import { AuthContext, withAuthProvider } from "../screens/Auth/AuthProvider";
import { isObjectEmpty } from "../utils/utils";

const AuthRoute = ({ element: Component, ...rest }) => {
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));
  console.log(currentUser);
  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth-login"} state={{ from: location }} replace />
  );
};
export default withAuthProvider(AuthRoute);
