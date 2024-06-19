import React from "react";
import "../App.css";
import Display from "../Components/Diplay";
import Header from "../Components/Header";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import CartProvider from "../Store/CartProvider";

/* import "./App.css";
import Display from "./Components/Diplay";
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import CartProvider from "./Store/CartProvider";
 */
function Home() {
  return (
    <CartProvider>
      <div className="App">
        <NavigationBar></NavigationBar>
        <Header></Header>
        <Display></Display>
        <footer>
          <Footer />
        </footer>
      </div>
    </CartProvider>
  );
}

export default Home;
