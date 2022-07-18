declare type TButtonVariant = "default" | "sad" | "joyful";
declare type TButtonProps = {
    label: string;
    onClick: () => void;
    onBlur: () => void;
    disabled?: boolean;
    variant: TButtonVariant;
};
export declare const Button: (props: TButtonProps) => JSX.Element;
export default Button;
