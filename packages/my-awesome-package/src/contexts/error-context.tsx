import { createContext, ReactNode, useState } from "react";

export type TErrorContext = {
    error: string;
    setError: (message: string) => void;
    clearError: () => void;
};

export const ErrorContext =
    createContext<TErrorContext>({
        error: "",
        setError: (_: string) => {},
        clearError: () => {}
    });

type TErrorContextProvider = {
    children: ReactNode;
};

export const ErrorContextProvider = ({ children }: TErrorContextProvider) => {
    const [error, setError] = useState<string>("");

    const clearError = (): void => {
        setError("");
    };

    const result: TErrorContext = {
        error,
        setError,
        clearError
    };

    return (
        <ErrorContext.Provider value={result}>
            { children }
        </ErrorContext.Provider>
    );
};