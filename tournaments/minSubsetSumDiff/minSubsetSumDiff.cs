maxSumSegmentsint minSubsetSumDiff(int[] a) {
    return findMin(a);
}

private int findMin(int[] arr) {
    var n = arr.Length;
    var arrSum = arr.Sum();
    var halfOfTotalSum = arrSum >> 1;

    var dp = new bool[1 + halfOfTotalSum, 1 + n];

    dp[0, 0] = true;

    for (var sum = 0; halfOfTotalSum >= sum; ++sum) {
        for (var idx = 0; n > idx; ++idx) {
            dp[sum, 1 + idx] = 0 == sum || dp[sum, idx] || 0 <= sum - arr[idx] && dp[sum - arr[idx], idx];
        }
    }

    int diff = int.MaxValue;

    for (var sum = halfOfTotalSum; 0 <= sum; --sum) {
        if (dp[sum, n]) {
            diff = arrSum - (sum << 1);
            break;
        }
    }

    return diff;
}
