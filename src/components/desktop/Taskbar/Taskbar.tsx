import React, { useEffect, useState } from "react";
import "./Taskbar.css";
import startbutton from "../../../img/icons/start-button.png";

export default function Taskbar() {
  const [timeString, setTimeString] = useState("0:00");

  useEffect(() => {
    setInterval(() => {
      const hour = new Date().getHours();
      const minute = new Date()
        .getMinutes()
        .toLocaleString("en-US", { minimumIntegerDigits: 2 });

      setTimeString(`${hour}:${minute}`);
    }, 1000);
  });

  return (
    <div className="task-bar">
      <button className="start-button">
        <img src={startbutton} alt="Start" />
      </button>
      <div className="clock">{timeString}</div>
    </div>
  );
}
