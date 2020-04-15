function climbingStairs(n) {
    const dp = Array(1 + n).fill(1);

    for (let i = 2; n >= i; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}
