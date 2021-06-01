import React from "react";
import backgroundImage from "../../../img/background.svg";
import "./Background.css";

export default function Background() {
  return (
    <img
      className="desktop-wallpaper"
      src={backgroundImage}
      alt="There should be a background here..."
    />
  );
}
