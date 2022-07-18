const MS_IN_SEC = 1000;

export const convertDateToUnixTimestamp = (date: Date): number => {
    if (date === undefined || date === null) {
        throw new Error("The data param is nullable!");
    }

    if (typeof date === "object" && !("getTime" in date)) {
        throw new Error("It seems the date param doesn't have 'getTime' method defined");
    }

    return date.getTime() / MS_IN_SEC;
};