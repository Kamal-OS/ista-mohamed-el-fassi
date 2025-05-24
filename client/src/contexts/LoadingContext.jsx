import LoadingScreen from "@/components/LoadingScreen";
import { createContext, useEffect, useState } from "react";

const LoadingContext = createContext();

function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [setIsLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading ? <LoadingScreen /> : children}
    </LoadingContext.Provider>
  );
}

export { LoadingProvider };
export default LoadingContext;
