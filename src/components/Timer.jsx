import {
  useEffect,
  useState,
  experimental_useEffectEvent as useEffectEvent,
} from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [incrementNum, setIncrementNum] = useState(1);

  // const onTick = () => {
  //   setCount(count + incrementNum);
  // };

  // event is separted from the useEffect by using this useEffectEvent hook
  const onTick = useEffectEvent(() => {
    setCount(count + incrementNum);
  });

  useEffect(() => {
    console.log("rendering...");
    // actual logic of the timer implementation
    const timerId = setInterval(onTick, 1000);

    return () => clearInterval(timerId);
  }, []);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(0)}>reset</button>

      <div>
        <hr />
        <h3>
          Every second, increment by
          <button
            disabled={incrementNum === 0}
            onClick={() => setIncrementNum(incrementNum - 1)}
          >
            -
          </button>{" "}
          {incrementNum}
          <button onClick={() => setIncrementNum(incrementNum + 1)}>+</button>
        </h3>
      </div>
    </div>
  );
};

export default Timer;
