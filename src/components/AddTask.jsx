/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTask = ({ addTaxk }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="add task"
      />
      <button
        onClick={() => {
          addTaxk(value);
          setValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
