import {
  useEffect,
  useState,
  experimental_useEffectEvent as useEffectEvent,
} from "react";

const Pointer = () => {
  const [position, setPosition] = useState({ x: -30, y: -30 });
  const [canMove, setCanmove] = useState(true);

  // this is the handler for mouse move
  //   const handleMove = (e) => {
  //     if (canMove) {
  //       setPosition({ ...position, x: e.clientX, y: e.clientY });
  //     } else {
  //       setPosition({ x: 0, y: 0 });
  //     }
  //   };

  // separting events from effects with this new useEffectEvent hook
  const onMouseMove = useEffectEvent((e) => {
    if (canMove) {
      setPosition({ ...position, x: e.clientX, y: e.clientY });
    }
  });

  useEffect(() => {
    window.addEventListener("pointermove", onMouseMove);
    return () => {
      window.removeEventListener("pointermove", onMouseMove);
    };
  }, []);

  return (
    <div>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={canMove}
          onChange={(e) => setCanmove(e.target.checked)}
        />
        the not is allowed to move
      </label>
      <hr />
      <div
        style={{
          position: "absolute",
          top: -30,
          left: -30,
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "crimson",
          opacity: "0.5",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
  );
};

export default Pointer;
