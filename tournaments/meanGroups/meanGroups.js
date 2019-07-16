function meanGroups(a) {
    const store = new Map();
    const n = a.length;
    const result = [];

    for (let i = 0; n > i; ++i) {
        const sum = a[i].reduce((total, item) => total + item, 0)/a[i].length;
        if (store.has(sum)) {
            store.set(sum, [...store.get(sum), i]);
        } else {
            store.set(sum, [i]);
        }
    }

    for (const [key, value] of store) {
        result.push(value);
    }

    return result;
}
