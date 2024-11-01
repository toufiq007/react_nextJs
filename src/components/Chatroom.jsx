/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { createConnection, logTravelId } from "../utils/utils";

const serverUrl = `http://locahost:5000`;

const Chatroom = ({ roomId }) => {
  // when differenet types of logic want's to synchronize then please use different useEffect with different dependency
  useEffect(() => {
    let ignore = false;
    const connection = createConnection(serverUrl, roomId);
    if (!ignore) {
      connection.connect();
    }
    logTravelId(roomId);
    return () => {
      ignore = true;
      connection.disconnect();
    };
  }, [roomId]);
  return (
    <div>
      <h2>
        welcome to the{" "}
        <span style={{ background: "cyan" }}>
          {roomId != null && roomId + " room"}
        </span>
      </h2>
    </div>
  );
};

export default Chatroom;
