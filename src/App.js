import "./App.css";
import Display from "./Components/Diplay";
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Header></Header>
      <Display></Display>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
