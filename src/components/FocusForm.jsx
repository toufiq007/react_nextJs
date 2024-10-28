import { useRef } from "react";

const FocusForm = () => {
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    inputRef.current.focus(); // when click the button then focus the input
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="enter text..." />
      <button onClick={handleFocusInput}>Focus on the input</button>
    </div>
  );
};

export default FocusForm;
