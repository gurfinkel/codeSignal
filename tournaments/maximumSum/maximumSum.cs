int maximumSum(int[] a, int[][] q) {
    var result = 0;
    var n = a.Length;
    var store = new int[n];

    foreach (var item in q) {
        for (int i = item[0]; item[1] >= i; ++i) {
            ++store[i];
        }
    }

    Array.Sort(a);
    Array.Sort(store);

    for (int i = 0; n > i; ++i) {
        result += (a[i] * store[i]);
    }
    return result;
}
