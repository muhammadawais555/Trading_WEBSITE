import React from "react";
import Navbar from "../Navbar1/Navbar";
import "./Header.css";
import Platform from "../Platform/Platform";
import Product from "../Product/Product";
import Services from "../Services/Service";
import Presentation from "../Presentation/Presentation";
import Footer from "../Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import Contact from "../Subscribe/Subscribe";

function Header() {
  return (
    <>
      <div id="main">
        <Navbar />
        <div className="name">
          <h1>
            <span>Let's Grow Together</span> with Trading CFD's
          </h1>
          <p className="details">
            Never depend on single income, Make investments to create second
            income
          </p>
          <a href="ContactUs" className="cv-btn">
            Reach Us
          </a>
        </div>
      </div>

      <div className="App">
        <Platform />
        <Presentation />
        <Product />
        <Services />
        <Contact />
        <Footer />
        <ScrollToTop Smooth size="20px" />
      </div>
    </>
  );
}

export default Header;
