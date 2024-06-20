import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Display from "../Components/Diplay";
import CartProvider from "../Store/CartProvider";

function Store() {
  return (
    <CartProvider>
      <div className="App">
        <NavigationBar></NavigationBar>
        <Header></Header>
        <Display />
        <footer>
          <Footer />
        </footer>
      </div>
    </CartProvider>
  );
}

export default Store;
