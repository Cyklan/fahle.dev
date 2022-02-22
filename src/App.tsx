import Mobile from "./pages/Mobile";
import "./App.css";
import "98.css";
import Desktop from "./pages/Desktop";
import { isMobile } from "react-device-detect";

function App() {

  return (
    <>
      {isMobile ? <Mobile /> : <Desktop />}
    </>
  );
}

export default App;
