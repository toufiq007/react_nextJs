import { useOnelineStatus } from "../hooks/useSubscribe";

const ExampleNine = () => {
  const isOnline = useOnelineStatus();

  return (
    <div>
      <div>
        <p>I am {isOnline ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
};

export default ExampleNine;
