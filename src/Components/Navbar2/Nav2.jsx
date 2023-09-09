import React, { useState } from "react";
import logo from "../../images/logo.png";
import "./Nav2.css";

function Navbar() {
  const [nav, setnav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 5) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    // <>
    <nav className={nav ? "nav active" : "nav"}>
      <a href="/" className="logo">
        <img src={logo} alt="" />
        {/* <h1>Usman</h1> */}
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Career">Careers</a>
        </li>
        <li>
          <a href="/ContactUs">Contact</a>
        </li>
        <li>
          <a href="/AboutUs">About Us</a>
        </li>
      </ul>
    </nav>
    // </>
  );
}

export default Navbar;