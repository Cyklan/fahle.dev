import React from "react";
import "./Desktop.css";
import Background from "../components/desktop/Background/Background";
import Taskbar from "../components/desktop/Taskbar/Taskbar";
import DesktopIcon from "../components/desktop/DesktopIcon/DesktopIcon";
import "98.css";

import myDocumentsImage from "../img/icons/documents.png";
import ieImage from "../img/icons/ie.png";
import info from "../img/icons/info.png";

export default function Desktop() {
  return (
    <div className="desktop">
      <Background />
      <Taskbar />

      <DesktopIcon
        text="My Documents"
        image={myDocumentsImage}
        initialPosition={0}
        onDoubleClick={() => {
          console.log("My Documents");
        }}
      />
      <DesktopIcon 
        text="About Me"
        image={info}
        initialPosition={1}
        onDoubleClick={() => console.log("About me")}
      />
      <DesktopIcon
        text="My Github"
        image={ieImage}
        initialPosition={2}
        onDoubleClick={() => {
          console.log("Internet Explorer");
        }}
      />
    </div>
  );
}
