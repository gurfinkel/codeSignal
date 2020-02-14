function nextLarger(a) {
    const result = Array(a.length).fill(0);
    const store = [];

    for (let i = a.length - 1; 0 <= i; --i) {
        while (store.length && store[store.length - 1] < a[i]) {
            store.pop();
        }

        result[i] = store.length ? store[store.length - 1] : -1;

        store.push(a[i]);
    }

    return result;
}
