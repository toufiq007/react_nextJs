import { useState } from "react";

export function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor);

  const handleChangeColor = () => {
    setColor("blue");
  };

  return (
    <>
      <h2 style={{ color }}>Message color </h2>
      <button onClick={handleChangeColor}>Change color</button>
    </>
  );
}
