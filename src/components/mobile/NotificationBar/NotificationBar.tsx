import useTime from "../../../hooks/useTime"
import "./NotificationBar.css"

export default function NotificationBar() {
  
  const time = useTime()
  
  return (
    <div className="notification-bar">
      <div className="clock">
        <span className="time">{time}</span>
      </div>
    </div>
  )
}