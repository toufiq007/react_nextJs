import { useEffect, useState, useSyncExternalStore } from "react";

// subscribe function
const subscribe = (callBack) => {
  window.addEventListener("online", callBack);
  window.addEventListener("offline", callBack);

  return () => {
    window.removeEventListener("online", callBack);
    window.removeEventListener("offline", callBack);
  };
};

// more modern and clear code with useSyncExternalStore react hook
const useStatusOnline = () => {
  return useSyncExternalStore(subscribe, () => navigator.onLine, true);
};


// convensional hook
// const useStatusOnline = () => {
//   const [isOnline, setIsOnline] = useState(true);

//   const handleOnline = () => {
//     setIsOnline(true);
//   };
//   const handleOffline = () => {
//     setIsOnline(false);
//   };

//   useEffect(() => {
//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);

//   return {
//     isOnline,
//   };
// };

export default useStatusOnline;
