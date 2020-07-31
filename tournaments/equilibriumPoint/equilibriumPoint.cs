int equilibriumPoint(int[] arr) {
    int n = arr.Length;
    int[] prefixSums = new int[1 + n];

    for (int idx = 0; n > idx; ++idx) {
        prefixSums[1 + idx] = prefixSums[idx] + arr[idx];
    }

    for (int idx = 0; n > idx; ++idx) {
        if (prefixSums[idx] == prefixSums[n] - prefixSums[1 + idx]) {
            return 1 + idx;
        }
    }

    return -1;
}
