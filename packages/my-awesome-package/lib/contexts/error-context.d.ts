import { ReactNode } from "react";
export declare type TErrorContext = {
    error: string;
    setError: (message: string) => void;
    clearError: () => void;
};
export declare const ErrorContext: import("react").Context<TErrorContext>;
declare type TErrorContextProvider = {
    children: ReactNode;
};
export declare const ErrorContextProvider: ({ children }: TErrorContextProvider) => JSX.Element;
export {};
