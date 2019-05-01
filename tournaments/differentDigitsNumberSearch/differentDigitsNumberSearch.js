function differentDigitsNumberSearch(inputArray) {
    for (const item of inputArray) {
        const s = item.toString();
        const store = new Set([...s]);

        if (s.length === store.size) return item;
    }

    return -1;
}
