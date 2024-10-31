import { useState } from "react";
import Example2 from "./Example2";

const ExampleContainer = () => {
  const [userId, setUserId] = useState(1);
  return (
    <div>
      <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>
        Switch to profile {userId === 1 ? 2 : 1}{" "}
      </button>
      {/* we can easily tell react that every changing of userId rerendered this component by specifying the userid */}
      <Example2 userId={userId} key={userId} />
    </div>
  );
};

export default ExampleContainer;
