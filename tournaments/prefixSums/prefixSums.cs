int[] prefixSums(int[] a) {
    var n = a.Length;
    var result = new int[n];

    result[0] = a[0];

    for (var i = 1; n > i; ++i) {
        result[i] = result[i - 1] + a[i];
    }

    return result;
}
