function numbersGrouping(a) {
    const getGroup = function(a) {
        return ~~((a - 1) / 10000);
    };

    const n = a.length;
    const store = Array(1000000).fill(0);
    let result = 0;

    for (const item of a) {
        const gr = getGroup(item);

        if (!store[gr]) {
            ++store[gr];
            ++result;
        }
    }

    return result + n;
}
