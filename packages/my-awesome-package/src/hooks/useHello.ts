import { useEffect, useRef } from "react";

const GREETING_PERIOD_MS = 3000;

export const useHello = (): void => {
    const intervalRef = useRef<NodeJS.Timer>();

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            intervalRef.current = setInterval(() => {
                if (mounted) {
                    console.info("Hello!");
                }
            }, GREETING_PERIOD_MS);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            mounted = false;
        }
    }, []);
};