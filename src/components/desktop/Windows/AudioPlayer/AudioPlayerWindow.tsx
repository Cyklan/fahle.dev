import { useState, useEffect } from "react";
import Window from "../../Window/Window";
import DefinedWindowProps from "../DefinedWindowProps";
import AudioRecordings, { AudioRecording } from "../../../../model/AudioRecordings";
import AudioPlayerItem from "../../AudioPlayerItem/AudioPlayerItem";
import "./AudioPlayerWindow.css";

interface PlayerTime {
  currentTime: number;
  duration: number;
}

export default function AudioPlayerWindow({title, updateZIndex, onClose}: DefinedWindowProps) {
  
  const [currentAudioInfo, setCurrentAudioInfo] = useState<AudioRecording | null>(null);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [playerTime, setPlayerTime] = useState<PlayerTime>({currentTime: 0, duration: 0});
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (currentAudioInfo == null) return;
    const audio = new Audio(currentAudioInfo.url);
    setCurrentAudio(audio);
  }, [currentAudioInfo]);

  useEffect(() => {
    if (currentAudio == null) return;

    setPlaying(true);
    currentAudio.onloadedmetadata = () => {
      const { duration } = currentAudio;
      setPlayerTime({
        currentTime: Date.now(),
        duration
      });
      currentAudio.play();
    }
    
    currentAudio.onended = () => {
      setPlaying(false);
      setCurrentAudio(null);
      setCurrentAudioInfo(null);
    }

  }, [currentAudio])

  const audioPlayerItems = AudioRecordings.map((audioRecording, index) => 
    <AudioPlayerItem 
      key={`audio-recording-${index}-${audioRecording.name}`}
      title={audioRecording.name}
      onClick={() => setCurrentAudioInfo(audioRecording)} />
  );


  
  return (
    <Window
      className="audio-player"
      updateZIndex={updateZIndex}
      title={title}
      onClose={onClose}
      size={{ x: 220, y: 350 }}
      initialPosition={{ x: 100, y: 150 }} >
        <ul className="audio-player-item-container">
          {audioPlayerItems}
        </ul>
      </Window>
  );
}
