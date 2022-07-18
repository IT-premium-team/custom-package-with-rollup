import classNames from "classnames";
import styles from "./Button.module.scss"

type TButtonVariant =
    | "default"
    | "sad"
    | "joyful";

type TButtonProps = {
    label: string;
    onClick: () => void;
    onBlur: () => void;
    disabled?: boolean;
    variant: TButtonVariant;
};

export const Button = (props: TButtonProps): JSX.Element => {
    const {
        label,
        onClick,
        onBlur,
        disabled,
        variant = "default"
    } = props;

    return (
        <div className={styles.buttonContainer}>
            <button
                className={classNames(
                    styles.button,
                    disabled && styles.disabled,
                    styles[variant]
                )}
                onClick={onClick}
                onBlur={onBlur}
                disabled={disabled}
            >
                {label}
            </button>
        </div>
    );
};

export default Button;