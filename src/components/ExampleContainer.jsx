import { useState } from "react";
// import Example2 from "./Example2";
// import Example from "./Example";
import ExampleThree from "./ExampleThree";
import { items1,items2 } from "../utils/data";

const ExampleContainer = () => {
        // example one
//   const [userId, setUserId] = useState(1);

// example three
const [items,setItems] = useState(items1)

  return (
    <div>
      {/* this is example one */}
      {/* <Example /> */}
      {/* this is example two */}
      {/* <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>
        Switch to profile {userId === 1 ? 2 : 1}{" "}
      </button> */}
      {/* we can easily tell react that every changing of userId rerendered this component by specifying the userid */}
      {/* <Example2 userId={userId} key={userId} /> */}

      {/* this is example three */}

      <button onClick={()=> setItems(items1)}>Switch to item 1</button>
      <button onClick={()=> setItems(items2)}>Switch to item 2</button>
      <ExampleThree items={items} />
    </div>
  );
};

export default ExampleContainer;
