import { useEffect, useState } from "react";

const FullExample = () => {
  const [text, setText] = useState("a");
  useEffect(() => {
    console.log('🔵 Schedule "' + text + '" log'); // first called this
    const timeoutId = setTimeout(() => {
      console.log("⏰ " + text); // at last this line will be printed
    }, 3000); // this is asynchronous called

    // so unmount component and enter this clear function
    return () => {
      console.log('🟡 Cancel "' + text + '" log'); // print this line
      clearTimeout(timeoutId);
    };
  }, [text]);
  return (
    <div>
      <h2>Show the sequence</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {text ? <h2>{text}</h2> : ""}
    </div>
  );
};

export default FullExample;
