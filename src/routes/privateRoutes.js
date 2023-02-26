import React, { Component, useContext } from "react";
import { Navigate, Outlet, Route, useLocation } from "react-router-dom";
import { AuthContext, withAuthProvider } from "../screens/Auth/AuthProvider";
import { isObjectEmpty } from "../utils/utils";

const AuthRoute = ({ element: Component, ...rest }) => {
  const location = useLocation();
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth-login"} state={{ from: location }} replace />
  );
};
export default withAuthProvider(AuthRoute);
