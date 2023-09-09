// import React, { useState } from 'react';
// import logo from '../../images/logo.png';
// import './Navbar.css';
// import { Link } from "react-scroll";

// function Navbar() {
//     const [nav, setnav] = useState(false);
//     const changeBackground = () => {
//         if(window.scrollY >= 700){
//             setnav(true);
//         }
//         else{
//             setnav(false);
//         }
//     }
//     window.addEventListener('scroll', changeBackground);
//   return (
//     // <>
//    <nav className={nav ? 'nav active' : 'nav'}>
//     <Link to='home' className='logo'>
//     <img src={logo} alt='' />
//     {/* <h1>Usman</h1> */}
//     </Link>
//     <input type='checkbox' className='menu-btn' id='menu-btn'/>
//     <label className='menu-icon' for='menu-btn'>
//         <span className='nav-icon'></span>
//     </label>
//     <ul className='menu'>
//     <li><Link to='home' className='active'>Home</Link></li>
//     <li><Link to='services'>Services</Link></li>
//     <li><Link to='platform'>Platform</Link></li>
//     <li><Link to='product'>Products</Link></li>
//     <li><Link to='career'>Careers</Link></li>
//     <li><Link to='contact'>Contact</Link></li>
//     </ul>
//    </nav>
//     // </>
//   )
// }

// export default Navbar;

import React, { useState } from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [nav, setnav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 700) {
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
          <a href="/" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#platform">Platform</a>
        </li>
        <li>
          <a href="#product">Products</a>
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
