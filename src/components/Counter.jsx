/* eslint-disable react/prop-types */

import Count from "./Count";
import CountAction from "./CountAction";

const Counter = ({count,handleIncrement,handleDecrement}) => {
  return (
    <div>
      <h2>Counter app</h2>
      <Count count={count} />
      <CountAction increment={handleIncrement} decrement={handleDecrement} />
    </div>
  );
};

export default Counter;
