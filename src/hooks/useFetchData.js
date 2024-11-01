import { useEffect, useState } from "react";

// custom hook for data fetching with loading state

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading,setIsLoading] = useState(false)
  useEffect(() => {
    let ignore = false;
    setIsLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setData(data);
          setIsLoading(false)
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return {
    data,
    isLoading
  };
};
