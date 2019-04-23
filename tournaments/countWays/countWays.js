function countWays(n, k) {
    const mod = 10 ** 9 + 7;
    const dp = Array(n + 1).fill(null).map(item => Array(k + 1).fill(0));

    dp[0][0] = 1;
    for (let i = 0; n + 1 > i; ++i)
        for (let j = 0; k + 1 > j; ++j)
            if (n >= i + 1) {
                dp[i + 1][j] = (dp[i][j] + dp[i + 1][j]) % mod;
                if (j + 1 <= k) {
                    dp[i + 1][j + 1] += dp[i][j];
                    dp[i + 1][j + 1] %= mod;
                }
            }

    return dp[n][k];
}
