import useStatusOnline from "../hooks/useOnlineStatus";

const StatusBar = () => {
  const { isOnline } = useStatusOnline();
  return (
    <div>
      <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
    </div>
  );
};

export default StatusBar;
