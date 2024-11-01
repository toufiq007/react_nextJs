import { useState } from "react";
import Chatroom from "./components/Chatroom";

const App = () => {
  const [roomId, setRoomId] = useState(null);
  const [showChatRoom, setShowChatRoom] = useState(true);
  
  return (
    <div>
      <div>
        <button onClick={() => setShowChatRoom(!showChatRoom)}>
          {showChatRoom ? "Hide chat room" : "Show chat room "}
        </button>
        <hr />
      </div>

      <label htmlFor="">select chat room</label>
      <select name="" id="" onChange={(e) => setRoomId(e.target.value)}>
        <option value="general">general</option>
        <option value="travel">travel</option>
        <option value="sports">sports</option>
      </select>

      {showChatRoom && <Chatroom roomId={roomId} />}
    </div>
  );
};

export default App;
