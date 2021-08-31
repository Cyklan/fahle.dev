import Window from "../../Window/Window";
import DefinedWindowProps from "../DefinedWindowProps";

export default function AudioPlayerWindow({title, updateZIndex, onClose}: DefinedWindowProps) {
  return (
    <Window
      updateZIndex={updateZIndex}
      title={title}
      onClose={onClose}
      size={{ x: 220, y: 350 }}
      initialPosition={{ x: 100, y: 150 }} >
        Fancy audio player
      </Window>
  );
}
