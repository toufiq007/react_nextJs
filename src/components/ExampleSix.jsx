/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { items1 } from "../utils/data";

const ExampleSix = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

const Parent = () => {
  const [data, setData] = useState(items1)

  console.log(data, "this data is from child to parent");

  return (
    <>
      <Child data={data}/>
    </>
  );
};

const Child = ({ data }) => {
  

  // sending data to the parent
  // avoid this type of data sending to the useEffect you take this data to the parent and send this data via props to the child
//   useEffect(() => {
//     if (data) {
//       setData(data);
//     }
//   }, [setData, data]);

  return (
    <>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
};

export default ExampleSix;
