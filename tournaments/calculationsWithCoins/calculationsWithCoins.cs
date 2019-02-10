int calculationsWithCoins(int a, int b, int c) {
    var store = new HashSet<int>();

    if (!store.Contains(a)) {
        store.Add(a);
    }

    if (!store.Contains(b)) {
        store.Add(b);
    }

    if (!store.Contains(c)) {
        store.Add(c);
    }

    if (!store.Contains(a + b)) {
        store.Add(a + b);
    }

    if (!store.Contains(a + c)) {
        store.Add(a + c);
    }

    if (!store.Contains(b + c)) {
        store.Add(b + c);
    }

    if (!store.Contains(a + b + c)) {
        store.Add(a + b + c);
    }

    return store.Count;
}
