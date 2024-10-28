import { useRef } from "react";
import Input from "./Input";
const Focus = () => {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <Input type="text" placeholder="enter your name" ref={inputRef} />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
};

export default Focus;
