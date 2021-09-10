import { useState, useEffect } from "react";
import Window from "../../Window/Window";
import DefinedWindowProps from "../DefinedWindowProps";
import AudioRecordings, { AudioRecording } from "../../../../model/AudioRecordings";
import AudioPlayerItem from "../../AudioPlayerItem/AudioPlayerItem";
import "./AudioPlayerWindow.css";
import { useAudioPlayer, useAudioPosition } from "react-use-audio-player";

interface AudioPlayerInformation {
  src: string;
  format: "ogg";
  autoplay: boolean;
  onend: () => void;
}

export default function AudioPlayerWindow({ title, updateZIndex, onClose }: DefinedWindowProps) {

  const [currentRecording, setCurrentRecording] = useState<AudioRecording | null>(null);
  const [currentAudioInfo, setCurrentAudioInfo] = useState<AudioPlayerInformation>({
    src: "",
    format: "ogg",
    autoplay: false,
    onend: () => { }
  });
  const audioPlayer = useAudioPlayer(currentAudioInfo);
  const { seek } = useAudioPosition();

  useEffect(() => {
    if (currentRecording === null) {
      audioPlayer.pause();
      return;
    }

    const audioInfo: AudioPlayerInformation = {
      src: currentRecording.url,
      format: "ogg",
      autoplay: true,
      onend: () => { },
    };

    setCurrentAudioInfo(audioInfo);
  }, [currentRecording]);

  const audioPlayerItems = AudioRecordings.map((audioRecording, index) =>
    <AudioPlayerItem
      key={`audio-recording-${index}-${audioRecording.name}`}
      title={audioRecording.name}
      onClick={() => {
        if (audioRecording.name === currentRecording?.name) {
          seek(0);
          audioPlayer.play();
          return;
        }

        setCurrentRecording(audioRecording);
      }} />
  );

  return (
    <Window
      className="audio-player"
      updateZIndex={updateZIndex}
      title={title}
      onClose={() => {
        onClose();
      }}
      size={{ x: 220, y: 350 }}
      initialPosition={{ x: 100, y: 150 }} >
      <ul className="audio-player-item-container">
        {audioPlayerItems}
      </ul>
      <div className="audio-player-controls">
      </div>
    </Window>
  );
}
