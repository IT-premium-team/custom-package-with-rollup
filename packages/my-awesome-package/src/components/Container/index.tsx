import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./Container.module.scss";

type TContainerVariant =
    | "default"
    | "light"
    | "dark";

type TContainerIndents =
    | "large"
    | "small"
    | "noPadding";

type TContainerProps = {
    variant: TContainerVariant;
    paddings: TContainerIndents;
    contentAlignment: "row" | "col";
    onBlur: () => void;
    children: ReactNode;
};

export const Container = (props: TContainerProps): JSX.Element => {
    const {
        variant = "default",
        paddings = "noPadding",
        contentAlignment = "col",
        onBlur,
        children
    } = props;

    return (
        <section
            className={classNames(
                styles.container,
                styles[variant],
                styles[paddings],
                styles[contentAlignment]
            )}
            onBlur={onBlur}
        >
            {children}
        </section>
    );
}