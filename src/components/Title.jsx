/* eslint-disable react/prop-types */
import React from "react";
const Title = ({ title }) => {
  console.log("rendering title...");
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default React.memo(Title)
