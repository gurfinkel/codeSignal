bool subsetSum(int[] arr) {
    return findPartition(arr);
}

private bool findPartition(int[] arr) {
    var n = arr.Length;
    var sum = arr.Sum();

    if (1 == (sum & 1)) {
        return false;
    }

    var dp = new bool[1 + (sum >> 1), 1 + n];

    for (var i = 0; n >= i; ++i) {
        dp[0, i] = true;
    }

    for (var i = 1; sum >> 1 >= i; ++i) {
        for (var j = 1; n >= j; ++j) {
            dp[i, j] = dp[i, j - 1];
            if (arr[j - 1] <= i) {
                dp[i, j] = dp[i, j - 1] || dp[i - arr[j - 1],j - 1];
            }
        }
    }

    return dp[sum >> 1, n];
}
