import { useState } from "react";
import Counter from "./Counter";

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {/* rendered component in a same position but different element to destroy the state */}
      {isPlayerA ? (
        <Counter person="Taylor" key="Taylor" />
      ) : (
        //  if adding this div then react doesn't preserve the state because it's not the same component and same position
        // <div>
        //   <Counter person="Sarah" />
        // </div>

        // this way component preserve the state
        // also can give a id if component is rendered in a same place
        <Counter person="Sarah" key="Sarah" />
      )}

      {/* rendered element in a different postion of rendered tree */}
      {/* {isPlayerA && <Counter person="Taylor" />}
      {!isPlayerA && <Counter person="Sarah" />} */}

      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        Next player!
      </button>
    </div>
  );
}
