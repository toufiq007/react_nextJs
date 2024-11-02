import { useState } from "react";
import Chatroom from "./components/Chatroom";
import { ServerContext } from "./context/ServerContext";

const App = () => {
  const [roomId, setRoomId] = useState(null);
  const [showChatRoom, setShowChatRoom] = useState(true);
  const [selectServerUrl, setSelectServerUrl] = useState(null);

  return (
    <div>
      <div>
        <button onClick={() => setShowChatRoom(!showChatRoom)}>
          {showChatRoom ? "Hide chat room" : "Show chat room "}
        </button>
        <hr />
      </div>

      <div>
        <label htmlFor="">select Server url</label>
        <select
          name=""
          id=""
          onChange={(e) => setSelectServerUrl(e.target.value)}
        >
          <option value="http://localhost:123">server 1</option>
          <option value="http://localhost:456">server 2</option>
          <option value="http://localhost:789">server 3</option>
        </select>
      </div>

      <div>
        <label htmlFor="">select chat room</label>
        <select name="" id="" onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="sports">sports</option>
        </select>
      </div>

      <ServerContext.Provider
        value={{ defaultContext: "http://localhost/defaultContext" }}
      >
        {showChatRoom && <Chatroom roomId={roomId} selectServerUrl={selectServerUrl} />}
      </ServerContext.Provider>
    </div>
  );
};

export default App;
