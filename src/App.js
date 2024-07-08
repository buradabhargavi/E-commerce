import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";

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
const Storepage = lazy(() => import("./Pages/StoreDisplay/Storepage"));

const Loader = () => <p>Loading...</p>;

const router = createBrowserRouter([
  { path: "/about", element: <About /> },
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/store", element: <Store /> },
  { path: "/store/:id", element: <ProductDetails /> },
  { path: "/contact", element: <ContactUs /> },
  {
    element: <AuthLogin />,
    children: [
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
  { path: "/forgotPassword", element: <ForgotPassword /> },
  {
    element: <AuthProtect />,
    children: [
      {
        path: "/store",
        id: "product-details",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <Storepage />
              </Suspense>
            ),
            loader: () =>
              import("./Pages/StoreDisplay/Storepage").then((module) =>
                module.Loader()
              ),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<Loader />}>
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
    <RouterProvider router={router}>
      <Routes />
    </RouterProvider>
  );
}

export default App;
