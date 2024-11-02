/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Children } from "react";
import React from "react";

const Button = ({ onIncrement, children }) => {
  console.log(`rendering button... ${children}`);
  return (
    <div>
      <button onClick={onIncrement}>{children}</button>
    </div>
  );
};

export default React.memo(Button);
