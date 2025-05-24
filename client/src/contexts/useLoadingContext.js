import LoadingContext from "@/contexts/LoadingContext";
import { useContext } from "react";

const useLoadingContext = () => useContext(LoadingContext);

export default useLoadingContext;
