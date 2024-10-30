import { useEffect, useState } from "react";

const Example = () => {
  const [firstName] = useState("Tailor");
  const [lastName] = useState("Swift");

  // avoid this  type of redundant useEffect
  //   const [fullName, setFullName] = useState("");
  //   useEffect(() => {
  //     setFullName(`${firstName} ${lastName}`);
  //   }, [firstName, lastName]);

  // good --> update during rendering
  const fullName = `${firstName} ${lastName}`; // this is the correct version
  return (
    <div>
      <h2>FullName : {fullName}</h2>
    </div>
  );
};

export default Example;
