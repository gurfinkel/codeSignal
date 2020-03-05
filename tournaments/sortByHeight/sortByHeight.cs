int[] sortByHeight(int[] a) {
    var store = new List<int>();

    foreach (var item in a) {
        if (-1 != item) {
            store.Add(item);
        }
    }

    store.Sort();

    var index = 0;

    for (int i = 0; a.Length > i; ++i) {
        if (-1 != a[i]) {
            a[i] = store[index++];
        }
    }

    return a;
}
