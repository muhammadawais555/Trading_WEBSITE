import React from "react";
// import Container from '../Components/Container';
import { GiDiceSixFacesFour, GiDiceSixFacesFive } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import Fade from "react-reveal/Fade";
import "./Platform.css";

function Platform() {
  return (
    <div id="platform">
      <div className="policy-wrapper home-wrapper-2 container">
        <div className="careers-section">
          <div className="header">
            <h1>Our Platform</h1>
          </div>
          <div className="careers">
            <div className="careers-row">
              <Fade up>
                <div className="careers-services">
                  <GiDiceSixFacesFour className="careers-icon" />
                  <h4>MT4</h4>
                  <p>
                    MetaTrader 4 is a popular trading platform for forex and CFD
                    trading. It offers advanced charting tools, technical
                    analysis indicators & automated trading capabilities.
                  </p>
                </div>
              </Fade>

              <Fade down>
                <div className="careers-services">
                  <GiDiceSixFacesFive className="careers-icon" />
                  <h4>MT5</h4>
                  <p>
                    MT5 builds upon MT4's features, offering additional asset
                    classes like stocks and commodities. It improved technical
                    indicators & enhanced algorithmic trading capabilities.
                  </p>
                </div>
              </Fade>

              <Fade up>
                <div className="careers-services">
                  <CgWebsite className="careers-icon" />
                  <h4>Web Trading</h4>
                  <p>
                    Web Trading offers convenience and accessibility, allowing
                    traders to trade from any device through a web browser
                    without downloading or installing any software.
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

export default Platform;
