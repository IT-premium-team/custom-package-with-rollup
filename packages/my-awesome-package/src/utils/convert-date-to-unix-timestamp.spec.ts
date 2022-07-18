import { convertDateToUnixTimestamp } from "./convert-date-to-unix-timestamp";

test("convert date to UNIX timestamp", () => {
    const test1 = () => {
        const date1 = undefined as unknown as Date;
        return convertDateToUnixTimestamp(date1);
    };
    expect(test1).toThrowError("The data param is nullable!");

    const test2 = () => {
        const date2 = null as unknown as Date;
        return convertDateToUnixTimestamp(date2);
    };
    expect(test2).toThrowError("The data param is nullable!");

    const test3 = () => {
        const date3 = {} as unknown as Date;
        return convertDateToUnixTimestamp(date3);
    };
    expect(test3).toThrowError("It seems the date param doesn't have 'getTime' method defined");

    const date4 = new Date("1995-12-17T03:24:00");
    const result4 = convertDateToUnixTimestamp(date4);
    expect(result4).toBe(819152640);
});