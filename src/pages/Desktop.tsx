import React from "react";
import "./Desktop.css";
import Background from "../components/desktop/Background/Background";
import Taskbar from "../components/desktop/Taskbar/Taskbar";
import "98.css";

export default function Desktop() {
  return <div className="desktop">
    <Background />
    <Taskbar />
  </div>;
}
