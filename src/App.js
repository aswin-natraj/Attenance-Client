import React, { useContext } from "react";
import { Route, Routes, useNavigate, use } from "react-router-dom";
import AuthRoute from "../src/routes/privateRoutes";
import MainLayout from "../src/layout/MainLayout/MainLayout";
import LoginScreen from "./screens/Auth/containers/LoginScreen";
import SignUpScreen from "./screens/Auth/containers/SignUpScreen";
import { LookupUser } from "./screens/Auth/AuthRepository";
import { AuthContext, withAuthProvider } from "./screens/Auth/AuthProvider";
import { withMultiProviders } from "./hooks/WithMultiProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { withMenuProvider } from "./screens/menuBar.js/menuProvider";
import { withProfileProvider } from "./screens/ProfileSideBar.js/profileprovider";
import PageNotFound from "./components/PageNotFound";

function App() {
  const { userLookUp } = useContext(AuthContext);

  React.useEffect(() => {
    userLookUp();
  }, []);

  return (
    <ChakraProvider>
      <Routes>
        <Route path="auth-login" element={<LoginScreen />} />
        <Route path="auth-signin" element={<SignUpScreen />} />
        <Route element={<AuthRoute />}>
          <Route path="/" element={<MainLayout />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default withMultiProviders([withAuthProvider], App);
