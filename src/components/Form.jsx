import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState([{ id: crypto.randomUUID() }]);
  const handleAddInput = (e) => {
    e.preventDefault();
    setInputs((prev) => [...prev, { id: crypto.randomUUID() }]);
  };
  const handleRemove = (id) => {
    const updateInputs = inputs.filter((input) => input.id !== id);
    setInputs([...updateInputs]);
  };
  return (
    <div>
      <form onSubmit={handleAddInput}>
        <div>
          {inputs.map((item) => (
            <div key={item.id}>
              <input type="text" placeholder={item.id} />
              <button onClick={() => handleRemove(item.id)}>remove</button>
            </div>
          ))}
        </div>
        <button type="submit">add input</button>
      </form>
    </div>
  );
};

export default Form;
