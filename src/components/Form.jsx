import { useState } from "react";
import { submitForm } from "../utils/utils";

const Form = () => {
  const [answer, setAnswer] = useState("");
  const [erorrMessage, setErrorMessage] = useState(null);

  const [status, setStatus] = useState("isTyping");
  // event handlers
  const handleInputChange = (e) => {
    setAnswer(e.target.value);
    setErrorMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("isSubmitting");

    try {
      const value = await submitForm(answer);
      if (value) {
        setStatus("success");
      }
    } catch (err) {
      setErrorMessage(err.message);
      setStatus("typing");
      console.log(err.message);
    }
  };

  if (status === "success") return <h1>Thats right</h1>;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleInputChange}
          disabled={status === "isSubmitting"}
        ></textarea>
        <br />
        <button
          type="submit"
          disabled={answer.length < 0 || status === "isSubmitting"}
        >
          Submit
        </button>
        {status === "isSubmitting" && <p>Loading...</p>}
        {erorrMessage && <p className="Error">{erorrMessage}</p>}
      </form>
    </>
  );
};

export default Form;
