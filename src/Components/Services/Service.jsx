import React from "react";
import img1 from "../../images/education.jpg";
import img2 from "../../images/financial.jpg";
import img3 from "../../images/portfolio.jpg";
import { Fade } from "react-reveal";
import "./Service.css";

const Service = () => {
  return (
    <div className="container">
      <div className="policy-wrapper home-wrapper-2">
        <div className="header" id="services">
          <h1>SERVICES</h1>
        </div>
        <div className="achievement-section">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Fade left>
                <div className="achievement-content-section">
                  <div className="achievement-content">
                    <h3>Training</h3>
                    <p>
                      Essential for traders to acquire the knowledge and skills
                      needed to make informed investment decisions. They
                      encompass learning about market analysis, risk management,
                      and trading strategies to enhance proficiency and minimize
                      potential losses.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Fade right>
                <img
                  src={img1}
                  className="achievement-image"
                  alt="Achievement"
                />
              </Fade>
            </div>
          </div>
        </div>

        <div className="achievement-section2">
          <div className="row">
            <div className="col-12 first">
              <h3>Financial Analysis</h3>
            </div>
            <div className="col-12 second">
              <p>
                Evaluating financial data, including company reports and market
                trends, to make informed investment decisions. It helps traders
                assess the financial health and performance of assets,
                ultimately aiding in the identification of profitable trading
                opportunities.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Fade left>
                <img
                  src={img2}
                  className="achievement-image2"
                  alt="Achievement"
                />
              </Fade>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Fade right>
                <div className="achievement-content-section2">
                  <div className="achievement-content2">
                    <h3>Financial Analysis</h3>
                    <p>
                      Evaluating financial data, including company reports and
                      market trends, to make informed investment decisions. It
                      helps traders assess the financial health and performance
                      of assets, ultimately aiding in the identification of
                      profitable trading opportunities.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="achievement-section">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Fade left>
                <div className="achievement-content-section">
                  <div className="achievement-content">
                    <h3>Portfolio Management</h3>
                    <p>
                      Strategically selecting and managing a collection of
                      assets (stocks, bonds, etc.) to achieve specific
                      investment goals. This process includes balancing risk and
                      return, diversification, and regularly reviewing and
                      adjusting the portfolio to optimize performance.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Fade right>
                <img
                  src={img3}
                  className="achievement-image"
                  alt="Achievement"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
