import { useEffect, useState } from "react";

const ExampleFour = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // ✅ Good: This logic should run because the component was displayed
  useEffect(() => {
    postData("/analytics/event", { eventName: "visit_form" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    postData("api/register", { firstName, lastName });
    //     setJsonToSubmit({ firstName, lastName }); // is not necessary
  };

  //   const [jsonToSubmit, setJsonToSubmit] = useState(null); // is not necessary
  // avoid event specific logic inside useEffect like post request
  //   useEffect(() => {
  //     if (jsonToSubmit !== null) {
  //       postData("/api/register", jsonToSubmit);
  //     }
  //   }, [jsonToSubmit]);

  const postData = (api_string, data) => {
    console.log(`${api_string}, ${JSON.stringify(data)}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="first name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="last name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExampleFour;
