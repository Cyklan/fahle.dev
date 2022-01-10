import "./AudioPlayerItem.css";

interface AudioPlayerItemProps {
  title: string;
  onClick: Function
}

export default function AudioPlayerItem({title, onClick}: AudioPlayerItemProps) {
  return (
    <li className="audio-player-item">
      <button onClick={() => onClick()}>{title}</button>
    </li>
  );
}