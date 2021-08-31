import React, { useRef } from "react";
import "./DesktopIcon.css";

interface DesktopIconProps {
  text: string;
  image: string;
  initialPosition: number;
  onDoubleClick: Function;
}

export default function DesktopIcon({
  text,
  image,
  initialPosition,
  onDoubleClick,
}: DesktopIconProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  const selectMe = () => {
    const selection = window.getSelection();
    const range = document.createRange();
    if (elementRef && elementRef.current) {
      range.selectNodeContents(elementRef.current);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };

  return (
    <div
      className="desktop-icon"
      ref={elementRef}
      onClick={selectMe}
      style={{
        top: 0 + 100 * initialPosition,
      }}
      onDoubleClick={() => onDoubleClick()}
    >
      <div>
        <img
          draggable={false}
          className="icon-image"
          alt="Desktop-Icon"
          src={image}
        />
      </div>
      <span className="icon-text">{text}</span>
    </div>
  );
}
