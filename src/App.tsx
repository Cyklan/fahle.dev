import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Desktop from "./pages/Desktop";
import Mobile from "./pages/Mobile";
import "./App.css";

function App() {
  return (
    <>
      <BrowserView>
        <Desktop />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </>
  );
}

export default App;
