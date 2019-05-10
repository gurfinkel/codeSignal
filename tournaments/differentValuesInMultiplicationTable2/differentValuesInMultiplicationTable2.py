def differentValuesInMultiplicationTable2(n, m):
    store = set()
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            store.add(i * j)
    return len(store)
