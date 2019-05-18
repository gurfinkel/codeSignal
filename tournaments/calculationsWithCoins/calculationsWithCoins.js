function calculationsWithCoins(a, b, c) {
    const store = new Set();
    store.add(a);
    store.add(b);
    store.add(c);
    store.add(a + b);
    store.add(a + c);
    store.add(b + c);
    store.add(a + b + c);
    return store.size;
}
