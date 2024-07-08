import React, { useState } from "react";
const AuthContext = React.createContext({
  token: "",
  email: "",
  isloggedIn: false,
  login: (token) => {},
  logout: () => {},
  updateToken: (token) => {},
});

export const AuthContextProvider = (props) => {
  const intialToken = localStorage.getItem("Token");
  setTimeout(() => {
    localStorage.removeItem("Token");
  }, 300000);
  const [token, setToken] = useState(intialToken);
  const userIsLoggedIn = !!token;
  const LoginHandler = (token) => {
    console.log(token);
    localStorage.setItem("Token", token);
    setToken(token);
  };
  const LogoutHandler = () => {
    localStorage.removeItem("Token");
    setToken(null);
  };
  const updateTokenHandler = (newToken) => {
    console.log(newToken);
    localStorage.setItem("Token", newToken);
    setToken(newToken);
  };
  const contextValue = {
    token: token,
    isloggedIn: userIsLoggedIn,
    login: LoginHandler,
    logout: LogoutHandler,
    updateToken: updateTokenHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
