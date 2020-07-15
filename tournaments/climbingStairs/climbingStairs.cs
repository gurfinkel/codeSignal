int climbingStairs(int n) {
    return climbingStairsBottomUp(n);
}

private int climbingStairsBottomUp(int n) {
    var dp = new int[1 + n];

    Array.Fill(dp, 1);

    for (int i = 2; n >= i; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}
