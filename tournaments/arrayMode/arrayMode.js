function arrayMode(sequence) {
    const store = new Map();
    let result = -1;
    let count = 0;
    
    for (const item of sequence) {
        if (store.has(item)) {
            store.set(item, 1 + store.get(item));
        } else {
            store.set(item, 1);
        }
    }
    
    for (const [key, value] of store) {
        if (count < value) {
            count = value;
            result = key;
        }
    }
    
    return result;
}
