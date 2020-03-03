function minimumOnStack(operations) {
    const store = [];
    const result = [];

    for (const item of operations) {
        const [operation, value] = item.split(' ');
        if ('push' === operation) {
            store.push(store.length ? Math.min(store[store.length - 1], +value) : +value);
        } else if ('pop' === operation) {
            store.pop();
        } else {
            result.push(store[store.length - 1]);
        }
    }

    return result;
}
