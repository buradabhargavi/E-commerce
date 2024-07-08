import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./Store/AuthContent/Auth-Context";
import AutoLogoutHOC from "./AutoLogout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <AuthContextProvider>
      <App />
      <AutoLogoutHOC />
    </AuthContextProvider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
