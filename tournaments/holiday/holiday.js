function holiday(x, weekDay, month, yearNumber) {
    const days = new Map([['Monday', 1], ['Tuesday', 2], ['Wednesday', 3], ['Thursday', 4], ['Friday', 5], ['Saturday', 6], ['Sunday', 7]]);
    const months = new Map([['January', 1], ['February', 2], ['March', 3], ['April', 4], ['May', 5], ['June', 6], ['July', 7], ['August', 8], ['September', 9], ['October', 10], ['November', 11], ['December', 12]]);

    const a = days.get(weekDay);
    const b = months.get(month);
    let c = 0;

    while (0 < x) {
        const next = new Date(yearNumber, b - 1, ++c);

        if (a === next.getDay()) {
            --x;
        }

        if (c > next.getDate()) {
            return -1;
        }
    }

    return c;
}
