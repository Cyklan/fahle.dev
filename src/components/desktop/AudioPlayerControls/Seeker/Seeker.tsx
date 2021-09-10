import "./Seeker.css";
import { useAudioPosition } from "react-use-audio-player";

interface SeekerProps {
  onSeek: (percent: number) => void;
}

export default function Seeker({ onSeek }: SeekerProps) {
  const { duration, position } = useAudioPosition();

  return (
    <input
      className="has-box-indicator audio-player-seeker"
      type="range"
      min={0}
      max={duration}
      value={position}
      onChange={(event) => {
        onSeek(event.target.valueAsNumber);
      }
      }
    />
  );
}