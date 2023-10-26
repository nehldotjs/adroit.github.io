import React from "react";
import { Link } from "react-router-dom";
import "./styles/landingPage.css";
function LandingPage() {
  return (
      <div className="landingPageWrapper">
        <div className="androitIntroSection">
          <div className="androidIntro-container">
            <h1>Adroit</h1>
            <p>
              We evaluate and monitor the non-performing loan accounts and
              implement a recovery action plan to achieve timely and maximum
              recovery at a minimal cost and appropriate turn-around time
              through acceptable common practices aligned with legal framework
              and standards
            </p>
          </div>
        </div>
        <div className="loginSection">
          <div className="login-container">
            <div className="loginContainer2">
              <div className="logo">
                <h3>Adroit</h3>
              </div>

              <div className="formContainer">
                <form action="#">
                  <div className="inputContainer">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                  </div>
                </form>
              </div>
              <Link className="link" to="/otpScreen">
                Login
              </Link>
            </div>
          </div>
          <div className="footerTradeMark">
            <p> &copy;2023 CreditWave Finance Limited | All Right Reserved</p>{" "}
          </div>
        </div>
      </div>
  );
}

export default LandingPage;
