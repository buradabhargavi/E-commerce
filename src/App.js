import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";

const router = createBrowserRouter([
  { path: "About", element: <About /> },
  { path: "/", element: <Home /> },
  { path: "Home", element: <Home /> },
  { path: "Store", element: <Store /> },
  { path: "Store/:id", element: <ProductDetails /> },
  { path: "contact", element: <ContactUs /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
