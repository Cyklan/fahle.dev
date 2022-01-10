import "./PlayButton.css";
import PlayIcon from "../../../../img/controls/play.png";
import PauseIcon from "../../../../img/controls/pause.png";

interface PlayButtonProps {
  playing: boolean;
  onClick: () => void;
}

export default function PlayButton({ playing, onClick }: PlayButtonProps) {
  return (
    <button
      className="audio-play-button"
      onClick={() => onClick()}>
      <img src={playing ? PauseIcon : PlayIcon} alt="playing" />
    </button>
  );
}