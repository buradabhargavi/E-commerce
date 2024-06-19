import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  { path: "/About", element: <About /> },
  { path: "/", element: <Home /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
