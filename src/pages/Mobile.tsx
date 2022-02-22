import "./Mobile.css"
import NotificationBar from "../components/mobile/NotificationBar/NotificationBar";
import Background from "../components/desktop/Background/Background";
import App from "../components/mobile/App/App";
import IELogo from "../img/icons/ie.png";

export default function Mobile() {
  return (
    <>
      <Background />
      <NotificationBar />
      <div className="site-container">
        <App icon={IELogo} onClick={() => {}} title="Internet Explorer" />
        <App icon={IELogo} onClick={() => {}} title="Internet Explorer" />
        <App icon={IELogo} onClick={() => {}} title="Music Player" />
      </div>
    </>
  );
}
