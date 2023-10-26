import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./screens/LandingPage";
import DashBoardScreen from "./screens/DashBoardScreen";
import OtpScreen from "./screens/OtpScreen";

function Screens() {
  return (
    <Router>
      <Routes>
        <Route path="/adroit/" element={<LandingPage />} />
        <Route path="/otpScreen" element={<OtpScreen />} />
        <Route path="/dashboardScreen" element={<DashBoardScreen />} />
      </Routes>
    </Router>
  );
}

export default Screens;
