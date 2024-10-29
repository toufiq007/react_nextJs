/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

const VideoContainer = ({ src, isPlaying }) => {
  const videoRef = useRef(null);
  // useEffect with dependency
  useEffect(() => {
    if (isPlaying) {
      console.log("calling video play....");
      videoRef.current.play();
    } else {
      console.log("calling video pause...");
      videoRef.current.pause();
    }
  }, [isPlaying]); // [] ---> only one time running after rendering the dom
  // [isPlaying] --> whenever isPlaying is change then rerender the dom

  return (
    <div>
      <video ref={videoRef} src={src} loop playsInline />
    </div>
  );
};

export default VideoContainer;
