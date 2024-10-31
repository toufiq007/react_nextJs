import { useState } from "react";
import FullExample from "./components/FullExample";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h2>learning useEffect sequence</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "mount" : "unmount"} component
      </button>
      {show && <hr />}
      {show && <FullExample />}
    </div>
  );
};

export default App;
