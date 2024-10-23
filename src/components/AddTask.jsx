/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTaskDispatch } from "../context/taskContext";

const AddTask = () => {
  const [value, setValue] = useState("");
  const dispatch = useTaskDispatch();

  const addTaxk = (text) => {
    dispatch({ type: "added", text });
  };

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
