import { useState } from "react";

export const useTextField = () => {
  const [value, setValue] = useState({ firstName: "", lastName: "" });

  function onInputChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  return {
    value,
    onInputChange,
  };
};
