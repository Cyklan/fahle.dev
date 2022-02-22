import useTime from "../../../hooks/useTime"
import "./Taskbar.css";
import startbutton from "../../../img/icons/start-button.png";

export default function Taskbar() {
  
  const time = useTime();

  return (
    <div className="task-bar">
      <button className="start-button">
        <img src={startbutton} alt="Start" />
      </button>
      <div className="clock">{time}</div>
    </div>
  );
}
