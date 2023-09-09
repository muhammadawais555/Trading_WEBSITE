import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import AboutUs from "./Screen/AboutUs/AboutUs";
import Career from "./Screen/Career/Career";
import ContactUs from "./Screen/ContactUs/ContactUs";
// import { BsWhatsapp } from "react-icons/bs";
import WA from "../src/images/WA.png";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <main>
          <div className="theme-btn">
            <a
              href="https://api.whatsapp.com/send?phone=03485376283"
              rel="noreferrer"
              target="_blank"
            >
              <img src={WA} alt="whatsapp" />
            </a>
          </div>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
