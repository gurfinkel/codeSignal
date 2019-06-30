function differentSubstrings(inputString) {
    const n = inputString.length;
    const store = new Set();

    for (let i = 0; n > i; ++i)
        for (let j = 1; n - i >= j; ++j)
            store.add(inputString.substring(i, i + j));

    return store.size;
}
