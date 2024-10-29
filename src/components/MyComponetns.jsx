import { useState } from "react";
import VideoContainer from "./VideoContainer";

const MyComponetns = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
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
