/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const ExampleThree = ({ items }) => {
  //   const [selectedItem, setSelectedItem] = useState(null);
  const [selectedId, setSelecteId] = useState(null);

  // solution one but not optimized
  // avoid state update during prop changing
  //   useEffect(() => {
  //     setSelectedItem(null);
  //   }, [items]);


  
  // better solution
  //   const [prevItems, setPrevItems] = useState(items);
  //   if (prevItems !== items) {
  //     setPrevItems(items);
  //     setSelectedItem(null);
  //   }

  

  // best approach --> calculate during rendering by derived state
  const selection = items.find((item) => item.id === selectedId) ?? null;
  console.log(selection);

  return (
    <div>
      <h2>this is the items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.id === selection?.id}
              onChange={() => setSelecteId(item.id)}
              name=""
              id=""
            />
            <b>{item.title}</b>
          </li>
        ))}
      </ul>
      {selection && (
        <div>
          <h2 style={{ background: "crimson", fontSize: "20px" }}>
            Selected item: {selection?.title}
          </h2>
        </div>
      )}
    </div>
  );
};

export default ExampleThree;
