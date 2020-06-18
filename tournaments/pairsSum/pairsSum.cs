int pairsSum(int[] a) {
    var result = 0;
    var store = new HashSet<int>(a);

    for (int i = 0; a.Length - 1 > i; ++i) {
        for (int j = 1 + i; a.Length > j; ++j) {
            if (store.Contains(a[i] + a[j])) {
                ++result;
            }
        }
    }

    return result;
}
