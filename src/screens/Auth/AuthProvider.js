import React from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, CURRENT_USER } from "../../constants/preferenceKey";
import { LoginUser, LookupUser } from "./AuthRepository";

export const AuthContext = React.createContext();

export function AuthProvider(props) {
  const [currentUser, setCurrentUser] = React.useState({});
  const navigation = useNavigate();

  const onLogin = async (formData) => {
    try {
      const response = await LoginUser(formData);
      localStorage.setItem(ACCESS_TOKEN, response.access);
      window.location.reload();
      return response;
    } catch (error) {
      console.log("----->", error);
    }
  };

  //LOOKUP USER
  const userLookUp = async () => {
    try {
      const response = await LookupUser();
      setCurrentUser(response.email);
      console.log(response);
      localStorage.setItem(CURRENT_USER, JSON.stringify(response));
      navigation("/");
    } catch (error) {
      console.log({ error });
    }
  };
  const mContext = { onLogin, userLookUp, currentUser };
  return (
    <AuthContext.Provider value={mContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const withAuthProvider = (Container, containerProps = {}) => {
  return () => (
    <AuthProvider>
      <Container {...containerProps} />
    </AuthProvider>
  );
};
