import { useEffect, useState } from "react";

const InfiniteLoop = () => {
  const [count, setCount] = useState(0);

  // without dependency this code will be created a infinite loop
  useEffect(() => {
    setCount(count + 1);
  }, []);
  return (
    <div>
      <h2>count: {count}</h2>
    </div>
  );
};

export default InfiniteLoop;
