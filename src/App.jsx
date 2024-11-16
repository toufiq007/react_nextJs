import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/features/counters/counterSlice";

const App = () => {
  // get our counters data from our redux store
  const counters = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incrementCounter = (id) => {
    // dispatch our action
    dispatch(increment(id));
  };
  const decrementCounter = (id) => {
    // dispatch our action
    dispatch(decrement(id));
  };

  const totalValue = counters.reduce((initialVal, currentVal) => {
    return (initialVal += currentVal.value);
  }, 0);

  return (
    <div>
      {counters.map((count) => {
        return (
          <>
            <div
              key={count.id}
              style={{
                background: "#ededed",
                width: "400px",
                margin: "10px auto",
                padding: "20px",
              }}
            >
              <Counter
                count={count.value}
                handleIncrement={() => incrementCounter(count.id)}
                handleDecrement={() => decrementCounter(count.id)}
              />
            </div>
          </>
        );
      })}
      <div
        style={{
          background: "#ededed",
          width: "400px",
          margin: "10px auto",
          padding: "20px",
        }}
      >
        <Stats totalCount={totalValue} />
      </div>
    </div>
  );
};

export default App;
