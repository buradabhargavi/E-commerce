import React from "react";
import "../App.css";
import Header from "../Home/Header";
import HomeNavbar from "../Home/HomeNavbar";
import HomeContent from "../Home/HomeContent";
import HomeFooter from "../Home/HomeFooter";

function Home() {
  return (
    <>
      <div className="App">
        <HomeNavbar></HomeNavbar>
        <Header></Header>
        <HomeContent />
        <footer>
          <HomeFooter />
        </footer>
      </div>
    </>
  );
}

export default Home;
