import { useState } from "react";
import VideoContainer from "./VideoContainer";

const MyComponetns = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "pause" : "play"}
      </button>
      <VideoContainer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
};

export default MyComponetns;
