import { useState, useEffect } from "react";
import Point from "../model/Point";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<Point>({ x: 0, y: 0 });

  const updateMousePosition = (ev: {clientX: number, clientY: number})  => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;