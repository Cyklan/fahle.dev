import React from "react";
import { isMobile } from "react-device-detect";
import Desktop from "./pages/Desktop";
import Mobile from "./pages/Mobile";
import "./App.css";

function App() {

  return (
    <>
      {isMobile ? <Mobile /> : <Desktop />}
    </>
  );
}

export default App;
