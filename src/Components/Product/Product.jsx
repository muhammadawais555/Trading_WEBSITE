import React from "react";
import { HiTemplate } from "react-icons/hi";
import { PiCertificateFill } from "react-icons/pi";
import { GrBitcoin } from "react-icons/gr";
import { RiStockLine } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";
import { TbLayersLinked } from "react-icons/tb";
import Fade from "react-reveal/Fade";
import "./Product.css";

function Product() {
  return (
    <div>
      <div className="policy-wrapper home-wrapper-2 container" id="product">
        <div className="careers-section">
          <div className="header">
            <h1>Products</h1>
          </div>
          <div className="careers">
            <div className="careers-row">
              <Fade left>
                <div className="careers-services">
                  <GrBitcoin className="careers-icon" />
                  <h4>Crpto</h4>
                  <p>
                    Cryptography operates on decentralized blockchain
                    technology, enabling secure and transparent peer-to-peer
                    transactions. Bitcoin, Ethereum, and Ripple are some
                    well-known cryptocurrencies.
                  </p>
                </div>
              </Fade>
              <Fade top>
                <div className="careers-services">
                  <HiTemplate className="careers-icon" />
                  <h4>Commodities</h4>
                  <p>
                    Commodities are raw materials or primary agricultural
                    products like gold, oil, wheat, or coffee that can be bought
                    and sold on various exchanges. Often used as a way to
                    diversify investment portfolios.
                  </p>
                </div>
              </Fade>
              <Fade right>
                <div className="careers-services">
                  <RiStockLine className="careers-icon" />
                  <h4>Forex</h4>
                  <p>
                    Global marketplace for trading currencies. Providing
                    opportunities for traders to speculate on currency exchange
                    rate fluctuations and profit from the differences in values
                    between pairs of currencies.
                  </p>
                </div>
              </Fade>
              <Fade left>
                <div className="careers-services">
                  <TbLayersLinked className="careers-icon" />
                  <h4>Bonds</h4>
                  <p>
                    Debt securities issued by governments or corporations to
                    raise capital. While buying, you are essentially lending
                    money in exchange for periodic interest and the return of
                    the bond's face value.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="careers-services">
                  <AiOutlineStock className="careers-icon" />
                  <h4>Shares</h4>
                  <p>
                    Shares represent ownership in a company. When you buy shares
                    of a company, you become a shareholder and own a portion of
                    that company. Share trading allows investors to buy and sell
                    these ownership stakes.
                  </p>
                </div>
              </Fade>
              <Fade right>
                <div className="careers-services">
                  <PiCertificateFill className="careers-icon" />
                  <h4>Indices</h4>
                  <p>
                    Benchmarks that track the performance of a specific group of
                    stocks in a particular financial market. Investors use
                    indices to gauge market trends and assess the overall health
                    of an economy.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
