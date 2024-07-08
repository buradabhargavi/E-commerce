import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";
import AuthLogin from "./Pages/AuthRouter/AuthLogin";
import AuthProtect from "./Pages/AuthRouter/AuthProtect";
import SignIn from "./LoginPages/Signin";
import SignUp from "./LoginPages/SignUp";
import ForgotPassword from "./LoginPages/ForgotPassword";

const router = createBrowserRouter([
  { path: "About", element: <About /> },
  { path: "/", element: <Home /> },
  { path: "Home", element: <Home /> },
  { path: "Store", element: <Store /> },
  { path: "Store/:id", element: <ProductDetails /> },
  { path: "contact", element: <ContactUs /> },
  {
    element: <AuthLogin />,
    children: [
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
  { path: "forgotPassword", element: <ForgotPassword /> },
  {
    element: <AuthProtect />,
    children: [
      {
        path: "store",
        id: "product-details",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <Store />
              </Suspense>
            ),
            loader: () =>
              import("./Pages/Store").then((module) => module.Loader()),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <ProductDetails />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
