import { useEffect, useState } from "react";
import { createConnection } from "../utils/utils.js";

const ChatRoom = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const connection = createConnection();
    connection.connect();

    // cleanup function
    return () => {
      connection.disconnect();
    };
  }, []);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      {show && <h1>Welcome to the chat!</h1>}
    </div>
  );
};

export default ChatRoom;
