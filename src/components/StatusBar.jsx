import useStatusOnline from "../hooks/useOnlineStatus";

const StatusBar = () => {
  //   const { isOnline } = useStatusOnline();
  const isOnline = useStatusOnline();
  console.log(isOnline);
  return (
    <div>
      <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
    </div>
  );
};

export default StatusBar;
