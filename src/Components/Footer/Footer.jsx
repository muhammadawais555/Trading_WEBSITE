import React from 'react';
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import {TbPhoneCall} from 'react-icons/tb';
import {HiMail} from 'react-icons/hi';
import {ImLocation2} from 'react-icons/im';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section id="footer" className="footer-section">
        <div class="container">
          <div class="row text-center text-xs-center text-sm-left text-md-left">
            <div class="col-xs-12 col-sm-4 col-md-3">
              <div className="footer-container">
                <a href="/">
                  {/* <img src="images/footer-image.PNG" alt="Footer Logo" /> */}
                  <h6>Usman Traders</h6>
                </a>
                <p>
                Trading CFDs is highly speculative, involves significant risk of loss and is not suitable for all investors. 
                 Before trading, you are strongly advised to read and ensure that you understand the relevant risk disclosures 
                 and warnings. 
                </p>
              </div>
            </div>

            <div class="col-xs-12 col-sm-4 col-md-3">
              <h5>About Us</h5>
              <ul class="list-unstyled quick-links">
                <li>
                  <a href="/">
                    <i class="fa fa-angle-double-right"></i>Home
                  </a>
                </li>
                <li>
                  <a href="Faq's">
                    <i class="fa fa-angle-double-right"></i>FAQ's
                  </a>
                </li>
                <li>
                  <a href="/Careers">
                    <i class="fa fa-angle-double-right"></i>Careers
                  </a>
                </li>
                <li>
                  <a href="/Privacypolicy">
                    <i class="fa fa-angle-double-right"></i>Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-3">
              <h5>Explore More</h5>
              <ul class="list-unstyled quick-links">
             
                <li>
                  <a href="/contactus">
                    <i class="fa fa-angle-double-right"></i>Product
                  </a>
                </li>
                <li>
                  <a href="/TermServices">
                    <i class="fa fa-angle-double-right"></i>Services
                  </a>
                </li>
                <li>
                  <a href="/Return-Exchange">
                    <i class="fa fa-angle-double-right"></i>Platform
                  </a>
                </li>
                <li>
                  <a href="/testimonial">
                    <i class="fa fa-angle-double-right"></i>Testimonials / Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-3">
              <h5>Connect with Us</h5>
              <ul class="list-unstyled address-link">
                <li>
                  <a href="callto:(+92) 3325755488">
                  <TbPhoneCall className="cart-icon3"/>(+92) 3325755488
                  </a>
                </li>
                <li>
                  <a href="mailto:muzaffar.molegen07@gmail.com">
                  <HiMail className="cart-icon3"/>muzaffar.mol@gmail.com
                  </a>
                </li>
                <li>
                  <a href="/Address">
                  <ImLocation2 className="cart-icon3"/>Office#38 Business Bay Dubai
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='row d-flex align-items-center'>
          <hr className="my-3 hr" />
          <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3 copyright">
                    {/* © 2023 Copyright:
                    <a
                      className="text-white"
                      href="https://mdbootstrap.com/">
                      All Right Reserved
                    </a> */}
                    <p>&copy; 2023 Copyright, All Right Reserved</p>
                  </div>
                </div>
                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                    <a href="https://www.facebook.com/profile.php?id=100093362000262&mibextid=ZbWKwL">
                  <BsFacebook className="cart-icon2"/>
                </a>
                <a href="https://twitter.com/molegen07">
                  <BsTwitter className="cart-icon2"/>
                </a>
                <a href="mailto:muzaffar.molegen07@gmail.com">
                  <SiGmail className="cart-icon2"/>
                </a>
                <a href="https://www.linkedin.com/in/muzaffar-islam-a35a9727a">
                  <BsLinkedin className="cart-icon2"/>
                </a>
                  {/* ... (Other Social Links) ... */}
                </div>
                </div>

        </div>
      
      </section>

    </>
  );
};
export default Footer;
