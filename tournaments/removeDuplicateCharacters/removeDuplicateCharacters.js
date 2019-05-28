function removeDuplicateCharacters(str) {
    const result = [];
    let store = new Map();

    for (const item of str)
        if (store.has(item)) store.set(item, 1 + store.get(item));
        else store.set(item, 1);

    for (const item of str)
        if (1 === store.get(item))
            result.push(item);

    return result.join('');
}
