import { Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useKeyboardShortcut from "../../hooks/useKeyboardShortcut";

export default function MediaPlayer() {
  const audioRef = useRef(null);

  useKeyboardShortcut(" ", () => {
    setIsPlaying(!isPlaying);
  });

  useKeyboardShortcut("m", () => {
    audioRef.current.muted = !audioRef.current.muted;
  });

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="wrapper">
      <div className="media-player">
        <img
          src="https://i.pinimg.com/736x/bf/ce/d3/bfced381377d025e892f8aa0f34b03b1.jpg"
          alt="Album cover"
          className="album-cover"
        />
        <div className="summary">
          <h1>People You Know</h1>
          <h3>Selena Gomez</h3>
        </div>

        <button
          className="toggle-btn"
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <audio ref={audioRef}>
          <source src="music/audio.m4a" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
