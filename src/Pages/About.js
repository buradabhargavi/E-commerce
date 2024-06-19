import React from "react";
import AboutContent from "../About/AboutContent";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AboutNav from "../About/AboutNav";
function About() {
  return (
    <>
      <AboutNav></AboutNav>
      <Header></Header>
      <AboutContent></AboutContent>
      <Footer></Footer>
    </>
  );
}

export default About;
