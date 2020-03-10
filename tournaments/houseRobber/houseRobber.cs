int houseRobber(int[] nums) {
    var n = nums.Length;
    var dp = new int[n];

    Array.Fill(dp, -1);

    return getMoney(nums, n - 1, dp);
}

private int getMoney(int[] nums, int idx, int[] dp) {
    if (0 > idx) {
        return 0;
    }

    if (-1 == dp[idx]) {
        dp[idx] = Math.Max(getMoney(nums, idx - 1, dp), nums[idx] + getMoney(nums, idx - 2, dp));
    }

    return dp[idx];
}
