/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const Example2 = ({ userId }) => {
  const [comments, setComments] = useState("");

  // avoid this type of pattern
  // resettting the state during prop changes
  //   useEffect(() => {
  //     setComments("");
  //   }, [userId]);

  return (
    <div>
      <h2>Profile no: {userId}</h2>
      <input
        type="text"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <hr />
      <p style={{ background: "crimson", color: "#fff", fontSize: "30px" }}>
        {comments}
      </p>
    </div>
  );
};

export default Example2;
