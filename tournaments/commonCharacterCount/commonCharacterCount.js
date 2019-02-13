function commonCharacterCount(s1, s2) {
    const store = new Map();
    let result = 0;

    for (const item of s1) {
        if (store.has(item)) {
            store.set(item, 1 + store.get(item));
        } else {
            store.set(item, 1);
        }
    }

    for (const item of s2) {
        if (store.has(item) && 0 < store.get(item)) {
            store.set(item, store.get(item) - 1);
            ++result;
        }
    }

    return result;
}
