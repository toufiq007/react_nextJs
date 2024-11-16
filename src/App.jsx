import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
const allCounters = [
  { id: 1, value: 1 },
  { id: 2, value: 1 },
];
const App = () => {
  const [counters, setCounters] = useState(allCounters);
  const incrementCounter = (id) => {
    setCounters((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, value: item.value + 1 } : item
      )
    );
  };
  const decrementCounter = (id) => {
    console.log(id);
    setCounters((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, value: item.value - 1 } : item
      )
    );
  };

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
        <Stats totalCount={counters[0].value + counters[0].value} />
      </div>
    </div>
  );
};

export default App;
