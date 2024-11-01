import { useEffect, useState, useSyncExternalStore } from "react";

const subsribe = (callback) => {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.addEventListener("offline", callback);
    window.removeEventListener("offline", callback);
  };
};

export const useOnelineStatus = () => {
//   const [isOnline, setIsOnline] = useState(true);

  return useSyncExternalStore(
    subsribe,
    () => navigator.onLine,
    () => true
  );

  //   useEffect(() => {
  //     function updateState() {
  //       setIsOnline(navigator.onLine);
  //     }

  //     updateState();

  //     // subscribe the event listner
  //     window.addEventListener("online", updateState);
  //     window.addEventListener("offline", updateState);

  //     return () => {
  //       window.removeEventListener("online", updateState);
  //       window.removeEventListener("offline", updateState);
  //     };
  //   }, []);

  //   return {
  //     isOnline,
  //   };
};
