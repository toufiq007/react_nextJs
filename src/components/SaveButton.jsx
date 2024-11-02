import useStatusOnline from "../hooks/useOnlineStatus";

const SaveButton = () => {
  const { isOnline } = useStatusOnline();
  const handleClick = () => {
    console.log("your data is saved!!");
  };
  return (
    <div>
      <button disabled={!isOnline} onClick={handleClick}>
        {isOnline ? "save progress" : "reconnecting"}
      </button>
    </div>
  );
};

export default SaveButton;
