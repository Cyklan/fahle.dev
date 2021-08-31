import "./Window.css";
import React, { useState, useRef, useEffect } from "react";
import Point from "../../../model/Point";
import useMousePosition from "../../../hooks/useMousePosition";

export interface WindowProps {
  title: string;
  children: React.ReactNode;
  onClose: Function;
  updateZIndex: Function;
}

export default function Window({ title, children, onClose, updateZIndex }: WindowProps) {

  const mousePosition = useMousePosition();

  const [mouseDelta, setMouseDelta] = useState<Point>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const titleBarRef = useRef<HTMLDivElement>(null);

  function handleMouseDown(e: React.MouseEvent) {
    const { clientX, clientY } = e;

    const {x, y} = titleBarRef.current!.getBoundingClientRect();

    const _mouseDelta: Point = {
      x: clientX - x,
      y: clientY - y
    };

    setMouseDelta(_mouseDelta);
    setIsDragging(true);
  }

  useEffect(() => {
    if (!isDragging) return;
        let clientX = mousePosition.x - mouseDelta.x;
        let clientY = mousePosition.y - mouseDelta.y;
        const vh = window.innerHeight;
        if (mousePosition.y > vh - 40) return;
        windowRef.current!.style.left = `${clientX}px`;
        windowRef.current!.style.top = `${clientY}px`;
  }, [mousePosition]);

  return (
    <div 
      className="window no-select" 
      ref={windowRef}
      onMouseDown={() => updateZIndex()}
      onMouseUp={() => setIsDragging(false)}>
      <div
        className="title-bar"
        onMouseDown={handleMouseDown}
        ref={titleBarRef}
      >

        <div className="title-bar-text">
          {title}
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Close" onClick={() => onClose()}></button>
        </div>
      </div>
      <div className="window-body">
        {children}
      </div>
    </div>
  );
}