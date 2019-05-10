function differentValuesInMultiplicationTable2(n, m) {
    const store = new Set();

    for (let i = 1; m + 1 > i; ++i)
        for (let j = 1; n + 1 > j; ++j)
            store.add(i * j);

    return store.size;
}
