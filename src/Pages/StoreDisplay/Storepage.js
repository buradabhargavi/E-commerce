import React, { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import Display from "../../Components/Diplay";
import NavigationBar from "../../Components/NavigationBar";
import Header from "../../Components/Header";
import CartProvider from "../../Store/CartProvider";
import Footer from "../../Components/Footer";
const Storepage = () => {
  const { products } = useLoaderData();

  return (
    <CartProvider>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={products}>
          {(loaderProducts) => (
            <>
              <NavigationBar />
              <Header />
              <Display products={loaderProducts} />
              <footer>
                <Footer />
              </footer>
            </>
          )}
        </Await>
      </Suspense>
    </CartProvider>
  );
};

export default Storepage;

async function LoaderData() {
  const data = await fetch("https://fakestoreapi.com/products?limit=5");
  if (!data.ok) {
    throw json({ message: "Could not able to fetch Data" });
  }
  const response = await data.json();
  return response;
}

export function Loader() {
  return defer({
    products: LoaderData(),
  });
}
