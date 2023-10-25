import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import "./styles/otpScreen.css";

import { useContxtValues } from "../contexts/context";
import CountDownTimer from "../components/CountDownTimer";

function OtpScreen() {
  const [inputValue, setInputValue] = useState("");
  // const { name } = useContxtValues();

  const isOtpCode = inputValue.length === 6;
  const isInputActive = inputValue.length > 0;

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (value.length <= 6) {
      setInputValue(value);
    }
  };

  return (
    <section className="otpSection">
      <div className="otpContainer">
        <div className="otp-logoContainer">
          <h3>Adroit</h3>
        </div>
        <div className="verificationSection">
          <div className="authContainer">
            <div className="lockIconContainer">
              <FontAwesomeIcon icon={faUnlock} className="fa-icons" />
            </div>
            <h1>Verify Login</h1>
            <p>
              Enter the (6) digit verification code sent to <br /> +234
              0913****8** and A******na@Creditwaveng.com to continue
            </p>
            <div className="inputVerificationContainer">
              <input
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                className="codeInput"
                onChange={handleInputChange}
                placeholder="Verification code"
                // disabled={inputValue.length >= 6}
              />
              <div className="verificationTimerContainer">
                <p>{isInputActive ? null : <CountDownTimer />}</p>
              </div>
            </div>
            {!isOtpCode ? (
              <button className="resetVerificationButton">Resend Code</button>
            ) : (
              <Link className="verificationBtn" to="/dashboardScreen">
                Submit
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtpScreen;
