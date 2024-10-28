import { useRef, useState } from "react";

const App = () => {
  const [show, setShow] = useState(true);
  const refData = useRef(null);
  // we can manipulate the dom element but be carefull to manipulate the dom element
  // we must avoid the dom element by own as much as possible
  // this is not the right way to manipulate the dom element
  const handleRemove = () => {
    refData.current.remove();
  };
  return (
    <div>
      <button onClick={() => setShow(!show)}>show data</button>
      <button onClick={handleRemove}>remove data </button>
      {show && <h2>hello world</h2>}

      {/*  this way is not valid for manipulation the dom element */}
      {/* <div
        style={{ background: "red", width: "100px", height: "100px" }}
        ref={refData}
      ></div> */}
    </div>
  );
};

export default App;
