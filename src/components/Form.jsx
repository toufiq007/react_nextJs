import { useTextField } from "../hooks/useTextField";

const Form = () => {
  const { value, onInputChange } = useTextField();

  console.log(value);
  return (
    <div>
      <div>
        <input
          type="text"
          value={value.firstName}
          name="firstName"
          onChange={onInputChange}
          placeholder="first name..."
        />
      </div>

      <div>
        <input
          type="text"
          value={value.lastName}
          name="lastName"
          onChange={onInputChange}
          placeholder="last name..."
        />
      </div>
      <h2>
        full name: {value.firstName} {value.lastName}
      </h2>
    </div>
  );
};

export default Form;
