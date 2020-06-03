int maxSumWithoutAdjacents(int[] a) {
    var dp = new int[a.Length];

    maxSumWithoutAdjacentsDp(a, dp);

    return dp[0];
}

int maxSumWithoutAdjacentsDp(int[] nums, int[] dp, int idx = 0) {
    if (nums.Length <= idx) {
        return 0;
    }

    if (0 == dp[idx]) {
        dp[idx] = Math.Max(
            nums[idx] + maxSumWithoutAdjacentsDp(nums, dp, 2 + idx),
            maxSumWithoutAdjacentsDp(nums, dp, 1 + idx)
        );
    }

    return dp[idx];
}
