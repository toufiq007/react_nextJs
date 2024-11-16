/* eslint-disable react/prop-types */

const CountAction = ({ increment, decrement}) => {
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default CountAction;
