int chartFix(int[] chart) {
    var n = chart.Length;
    var maxLength = 1;
    var dp = new int[n];
    
    Array.Fill(dp, 1);

    for (int i = 1; n > i; ++i) {
        for (int j = i - 1; 0 <= j; --j) {
            if (dp[j] + 1 > dp[i] && chart[j] < chart[i]) {
                dp[i] = dp[j] + 1;
            }
        }

        maxLength = Math.Max(maxLength, dp[i]);
    }

    return chart.Length - maxLength;
}
