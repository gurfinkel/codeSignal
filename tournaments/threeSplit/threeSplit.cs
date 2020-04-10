int threeSplit(int[] a) {
    var n = a.Length;
    var result = 0;
    var store = new long[n];
    store[0] = a[0];

    for (int i = 1; n > i; ++i) {
        store[i] = (a[i] + store[i - 1]);
    }

    for (int i = 0; n - 2 > i; ++i) {
        for (int j = i + 1; n - 1 > j; ++j) {
            var firstSum = store[i];
            var middleSum = store[j] - store[i];
            var lastSum = store[n - 1] - store[j];

            if (firstSum == middleSum && middleSum == lastSum) {
                ++result;
            }
        }
    }

    return result;
}
