import { useContext } from "react";
import { ErrorContext } from "./error-context";

export const useErrorContext = () => {
    return useContext(ErrorContext);
};