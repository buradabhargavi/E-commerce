import React, { useContext } from "react";
import AuthContext from "../../Store/AuthContent/Auth-Context";
import { Navigate, Outlet } from "react-router-dom";

const AuthProtect = () => {
  const AuthCtx = useContext(AuthContext);

  if (!AuthCtx.isloggedIn) {
    return <Navigate to="/signin" />;
  }
  return <Outlet />;
};
export default AuthProtect;
