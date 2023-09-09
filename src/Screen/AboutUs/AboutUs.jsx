import React from "react";
import img1 from "../../images/mission.jpg";
import { Fade } from "react-reveal";
import Nav2 from "../../Components/Navbar2/Nav2";
import "./AboutUs.css";
import Footer from "../../Components/Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Nav2 />
      <div className="container">
        <div className="policy-wrapper home-wrapper-2">
          <div className="about-section" id="services">
            <div className="about-title Home-title">
              <h1>Company Logo</h1>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <Fade left>
                  <div className="about-content-section">
                    <div className="about-content">
                      <h3>Mission & Vision</h3>
                      <p>
                        Facilitate international currency exchange for Trade and
                        Investment, ensuring Market Efficiency and Risk
                        Management. Vision is to become the global standard for
                        transparent, accessible, and secure currency trading,
                        fostering economic stability and growth worldwide.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <Fade right>
                  <img src={img1} className="aboutus-image" alt="about" />
                </Fade>
              </div>
            </div>
          </div>
          <div className="header">
            <h1>Our Expertise</h1>
            <section>
              <div className="about___data">
                <div className="about___skils grid">
                  <div className="row skills___data">
                    <Fade left transitionDuration={90}>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                        <h3 className="skills___name">Commodities</h3>
                        <div className="row expect">
                          <div className="col-10 skills___bar">
                            <span className="skills___percentage development"></span>
                          </div>
                          <div className="col-2">
                            <span className="skills___number">90%</span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade left transitionDuration={90}>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                        <h3 className="skills___name">ETF’s & Bonds</h3>{" "}
                        <div className="row expect">
                          <div className="col-10 skills___bar">
                            <span className="skills___percentage development"></span>
                          </div>
                          <div className="col-2">
                            <span className="skills___number">90%</span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade left transitionDuration={90}>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                        <h3 className="skills___name">Underlying Stocks</h3>
                        <div className="row expect">
                          <div className="col-10 skills___bar">
                            <span className="skills___percentage development"></span>
                          </div>
                          <div className="col-2">
                            <span className="skills___number">90%</span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade left transitionDuration={90}>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                        <h3 className="skills___name">Forex</h3>
                        <div className="row expect">
                          <div className="col-10 skills___bar">
                            <span className="skills___percentage development"></span>
                          </div>
                          <div className="col-2">
                            <span className="skills___number">90%</span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade left transitionDuration={90}>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                        <h3 className="skills___name">Crypto Currencies</h3>
                        <div className="row expect">
                          <div className="col-10 skills___bar">
                            <span className="skills___percentage development"></span>
                          </div>
                          <div className="col-2">
                            <span className="skills___number">90%</span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade left transitionDuration={90}>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                        <h3 className="skills___name">IPO’s</h3>
                        <div className="row expect">
                          <div className="col-10 skills___bar">
                            <span className="skills___percentage development"></span>
                          </div>
                          <div className="col-2">
                            <span className="skills___number">90%</span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade left transitionDuration={90}>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                        <h3 className="skills___name">shares</h3>
                        <div className="row expect">
                          <div className="col-10 skills___bar">
                            <span className="skills___percentage development"></span>
                          </div>
                          <div className="col-2">
                            <span className="skills___number">90%</span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade left transitionDuration={90}>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                        <h3 className="skills___name">Indices</h3>
                        <div className="row expect">
                          <div className="col-10 skills___bar">
                            <span className="skills___percentage development"></span>
                          </div>
                          <div className="col-2">
                            <span className="skills___number">90%</span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
