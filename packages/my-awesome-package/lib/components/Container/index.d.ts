import { ReactNode } from "react";
declare type TContainerVariant = "default" | "light" | "dark";
declare type TContainerIndents = "large" | "small" | "noPadding";
declare type TContainerProps = {
    variant: TContainerVariant;
    paddings: TContainerIndents;
    contentAlignment: "row" | "col";
    onBlur: () => void;
    children: ReactNode;
};
export declare const Container: (props: TContainerProps) => JSX.Element;
export {};
