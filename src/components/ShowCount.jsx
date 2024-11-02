/* eslint-disable react/prop-types */
import React from "react";
const ShowCount = ({ countValue }) => {
  console.log("rendering show count...");
  return (
    <div>
      <h2> {countValue}</h2>
    </div>
  );
};

export default React.memo(ShowCount);
