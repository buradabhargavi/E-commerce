import React, { useState } from "react";
const AuthContext = React.createContext({
  token: "",
  email: "",
  isloggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const intialToken = localStorage.getItem("Token");
  setTimeout(() => {
    localStorage.removeItem("Token");
  }, 300000);
  const [token, setToken] = useState(intialToken);
  const userIsLoggedIn = !!token;
  const LoginHandler = (token) => {
    localStorage.setItem("Token", token);
    setToken(token);
  };
  const LogoutHandler = () => {
    localStorage.removeItem("Token");
    setToken(null);
  };
  const contextValue = {
    token: token,
    isloggedIn: userIsLoggedIn,
    login: LoginHandler,
    logout: LogoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
