import React from "react";
import Nav2 from '../../Components/Navbar2/Nav2';
import Footer from '../../Components/Footer/Footer';
import "./ContactUs.css";

const Contact = () => {
  return (
    <>
    <Nav2 />
      <section className="contact container section">
      <div className="header">
        <h1>Get In Touch</h1>
        </div>
        <div className="contact container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830.1490985777439!2d73.08117016959076!3d33.66761831448975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df957c91b2b2d9%3A0x163e62a69812e699!2sMolegen!5e0!3m2!1sen!2s!4v1690980653930!5m2!1sen!2s"
          width="600"
          height="450"
          className="border-0 w-100"
          title="map"
          AllowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

        <div className="contact___container grid">
          <div className="contact___info">
            <h3 className="contact___title">Let's talk about everything!</h3>
            <p className="contact___details">Reach out to me via Email!</p>
            {/* <p className='contact___details'>Don't like forms? send me an Email</p> */}
          </div>

          <form action="" className="contact___form">
            <div className="contact___form-group">
              <div className="contact___form-div">
                <input
                  type="text"
                  className="contact___form-input"
                  placeholder="Full Name"
                  required="true"
                />
              </div>

              <div className="contact___form-div">
                <input
                  type="email"
                  className="contact___form-input"
                  placeholder="Your Email"
                  pattern="[a-zA-Z0-9._]+@gmail\.com$"
                  required="true"
                  unique="true"
                />
              </div>
            </div>
            <div className="contact___form-div">
              <input
                type="text"
                className="contact___form-input"
                placeholder="Insert Your Subject"
                required="true"
              />
            </div>
            <div className="contact___form-div contact___form-area">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="contact___form-input"
                placeholder="Write your Message"
                required="true"
              />
            </div>

            <button className="contact-btn">Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;