import React from "react";
import Screens from "./Screens";
import { ValueProvider } from "./contexts/context";
import "./app.css";
function App() {
  return (
    <div>
      <ValueProvider>
        <Screens />
      </ValueProvider>
    </div>
  );
}

export default App;
