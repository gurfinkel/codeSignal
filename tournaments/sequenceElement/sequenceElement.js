function sequenceElement(a, n) {
    const mod = 1e5;

    let hash = a[0] * 1e4 + a[1] * 1e3 + a[2] * 1e2 + a[3] * 10 + a[4];
    let index = 4;
    let store = new Map();

    store.set(hash, index);

    while (++index) {
        a.push((a[index - 1] + a[index - 2] + a[index - 3] + a[index - 4] + a[index - 5]) % 10);
        hash = (hash * 10 + a[index]) % mod;

        if (store.has(hash)) {
            return a[n % (index - store.get(hash))];
        } else {
            store.set(hash, index);
        }
    }
}
