function removeDuplicateCharacters(str) {
    const result = [];
    let store = new Map();
    
    for (const letter of str) {
        if (store.has(letter)) {
            store.set(letter, 1 + store.get(letter));
        } else {
            store.set(letter, 1);
        }
    }
    
    for (const letter of str) {
        if (1 === store.get(letter)) {
            result.push(letter);
        }
    }
    
    return result.join('');
}
