import { useCallback, useState } from "react";
import Title from "./Title";
import Button from "./Button";
import ShowCount from "./ShowCount";

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // both syntax is valid with this useCallback hook
  const incrementByOne = useCallback(() => {
    setCount1((prev) => prev + 1); // in this way dependency is not needed
  }, []);
  const incrementByFive = useCallback(() => {
    setCount2(count2 + 1); // in this way depencency is needed
  }, [count2]);
  return (
    <div>
      <Title title="this is a counter component" />
      <hr />
      <ShowCount countValue={count1} />
      <Button onIncrement={incrementByOne}>Increment by one</Button>

      <hr />
      <ShowCount countValue={count2} />
      <Button onIncrement={incrementByFive}>Increment by five</Button>
    </div>
  );
};

export default Counter;
