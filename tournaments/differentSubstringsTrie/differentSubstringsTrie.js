function differentSubstringsTrie(inputString) {
    const store = new Set();

    for (let i = 0; inputString.length > i; ++i) {
        for (let j = 1; inputString.length >= i + j; ++j) {
            store.add(inputString.substring(i, i + j));
        }
    }

    return store.size;
}
