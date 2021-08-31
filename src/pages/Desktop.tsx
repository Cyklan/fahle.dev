import React, { useState } from "react";
import "./Desktop.css";
import Background from "../components/desktop/Background/Background";
import Taskbar from "../components/desktop/Taskbar/Taskbar";
import DesktopIcon from "../components/desktop/DesktopIcon/DesktopIcon";
import GithubWindow from "../components/desktop/Windows/GithubWindow/GithubWindow";
import AboutMeWindow from "../components/desktop/Windows/AboutMeWindow/AboutMeWindow";
import AudioPlayerWindow from "../components/desktop/Windows/AudioPlayer/AudioPlayerWindow";
import { v4 } from "uuid";
import "98.css";

import myDocumentsImage from "../img/icons/documents.png";
import ieImage from "../img/icons/ie.png";
import info from "../img/icons/info.png";
import music from "../img/icons/media.png";

interface WindowStore {
  id: string;
  title: string;
  type: "Github" | "Documents" | "About" | "Music";
  zIndex: number;
}

export default function Desktop() {
  const [windows, setWindows] = useState<WindowStore[]>([]);

  function closeWindow(id: string) {
    setWindows(windows.filter((window) => window.id !== id));
  }

  const updateZIndex = (id: string) => {
    const newWindows = [...windows];
    const sortedWindows = newWindows
      .filter((x) => x.id !== id)
      .sort((a, b) => b.zIndex - a.zIndex);
    const max = Math.max.apply(
      Math,
      sortedWindows.map((x) => x.zIndex)
    );

    sortedWindows.push(...newWindows.filter((x) => x.id === id));
    sortedWindows[sortedWindows.length - 1].zIndex = max + 1;

    setWindows(sortedWindows);
  };

  const windowElems = windows.map((x) => {
    switch (x.type) {
      case "Github":
        return (
          <GithubWindow
            updateZIndex={() => updateZIndex(x.id)}
            key={x.id}
            id={x.id}
            title={x.title}
            onClose={() => closeWindow(x.id)}
          />
        );
      case "About":
        return (
          <AboutMeWindow
            updateZIndex={() => updateZIndex(x.id)}
            key={x.id}
            id={x.id}
            title={x.title}
            onClose={() => closeWindow(x.id)}
          />
        );
      case "Music":
        return (
          <AudioPlayerWindow
            updateZIndex={() => updateZIndex(x.id)}
            key={x.id}
            id={x.id}
            title={x.title}
            onClose={() => closeWindow(x.id)}
          />
        )
      default:
        return <></>;
    }
  });

  return (
    <div className="desktop">
      <Background />
      <Taskbar />

      <DesktopIcon
        text="My Favourite Projects"
        image={myDocumentsImage}
        initialPosition={0}
        onDoubleClick={() => {
          console.log("My Favourite Projects");
        }}
      />
      <DesktopIcon
        text="About Me"
        image={info}
        initialPosition={1}
        onDoubleClick={() =>
          setWindows([
            ...windows,
            {
              id: v4(),
              title: "About Me",
              type: "About",
              zIndex: windows.length + 1,
            },
          ])
        }
      />
      <DesktopIcon
        text="Github"
        image={ieImage}
        initialPosition={2}
        onDoubleClick={() => {
          setWindows([
            ...windows,
            {
              id: v4(),
              title: "Github",
              type: "Github",
              zIndex: windows.length + 1,
            },
          ]);
        }}
      />
      <DesktopIcon 
        text="Audio Player"
        image={music}
        initialPosition={3}
        onDoubleClick={() => {
          setWindows([
            ...windows,
            {
              id: v4(),
              title: "Audio Player",
              type: "Music",
              zIndex: windows.length + 1,
            },
          ])
        }}
      />

      {windowElems}
    </div>
  );
}
