import { useEffect, useState } from "react";

export default function useTime() {
  const [timeString, setTimeString] = useState(calculateTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeString(calculateTimeString());
    }, 1000);

    return () => clearInterval(interval);
  });

  return timeString;
}

function calculateTimeString() {
  const hour = new Date().getHours();
  const minute = new Date()
    .getMinutes()
    .toLocaleString("en-US", { minimumIntegerDigits: 2 });
  return `${hour}:${minute}`;
}
