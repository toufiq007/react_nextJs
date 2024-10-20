import { useState } from "react";

const Pointer = () => {
  // group together the states
  //   const [x, setX] = useState(0);
  //   const [y, setY] = useState(0);

  // grouped state
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ position: "relative", height: "100vh", widows: "100vw" }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          background: "red",
          borderRadius: "50%",
          position: "absolute",
          top: -10,
          left: -10,
          transition: "0.4s ease",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
  );
};

export default Pointer;
