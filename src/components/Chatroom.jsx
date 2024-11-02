/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { createConnection, logTravelId } from "../utils/utils";
import { ServerContext } from "../context/ServerContext";

// const serverUrl = `http://locahost:5000`;

const Chatroom = ({ roomId,selectServerUrl }) => {
  const serverContext = useContext(ServerContext)
  const mainServer = selectServerUrl ?? serverContext?.defaultContext // derived reactive value
  // when differenet types of logic want's to synchronize then please use different useEffect with different dependency
  useEffect(() => {
    let ignore = false;
    const connection = createConnection(mainServer, roomId);
    if (!ignore) {
      connection.connect();
    }
    logTravelId(roomId);
    return () => {
      ignore = true;
      connection.disconnect();
    };
  }, [roomId,mainServer]);
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
