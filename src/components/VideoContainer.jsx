/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

const VideoContainer = ({ src, isPlaying }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  });

  return (
    <div>
      <video ref={videoRef} src={src} loop playsInline />
    </div>
  );
};

export default VideoContainer;
