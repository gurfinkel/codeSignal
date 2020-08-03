int[] findSubarrayBySum(int s, int[] arr) {
    int n = arr.Length;
    int[] prefixSums = new int[1 + n];

    for (int idx = 0; n > idx; ++idx) {
        prefixSums[1 + idx] = arr[idx] + prefixSums[idx];
    }

    for (int left = 0; n > left; ++left) {
        for (int right = 1 + left; n >= right; ++right) {
            if (s == prefixSums[right] - prefixSums[left]) {
                return new int[] {1 + left, right};
            }
        }
    }

    return new int[] {-1};
}
