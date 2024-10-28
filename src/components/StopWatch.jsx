import { useRef, useState } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  let timerRef = useRef(null);

  console.log("rendering...");

  const handleStartTime = () => {
    setStartTime(Date.now());
    setCurrentTime(Date.now());
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentTime(Date.now());
    }, 10);
  };
  const handleStopTime = () => {
    clearInterval(timerRef.current);
  };

  let timePassed = 0;
  if (startTime !== null && currentTime !== null) {
    timePassed = (currentTime - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {timePassed.toFixed(3)} </h1>
      <button onClick={handleStartTime}>Start</button>
      <button onClick={handleStopTime}>Stop</button>
    </>
  );
}
