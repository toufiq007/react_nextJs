import { useRef } from "react";

const ChangeColor = () => {
  const ref = useRef(null);

  console.log(ref.current);

  function changeColor() {
    ref.current.style.backgroundColor = "red";
  }

  return (
    <>
      <h2 ref={ref}>hello world!!</h2>
      <button onClick={changeColor}>changeColor</button>
    </>
  );
};

export default ChangeColor;
