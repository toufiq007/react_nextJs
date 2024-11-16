/* eslint-disable react/prop-types */

const CountAction = ({ increment, decrement,id }) => {
  return (
    <div>
      <button onClick={()=> increment(id)}>increment</button>
      <button onClick={()=> decrement(id)}>decrement</button>
    </div>
  );
};

export default CountAction;
