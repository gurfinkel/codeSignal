int chartFix(int[] chart) {
    var n = chart.Length;
    var a = 1;
    var dp = new int[n];

    Array.Fill(dp, 1);

    for (var i = 1; n > i; ++i) {
        for (var j = i - 1; 0 <= j; --j)
            if (dp[j] + 1 > dp[i] && chart[j] < chart[i]) dp[i] = dp[j] + 1;
        a = Math.Max(a, dp[i]);
    }

    return n - a;
}
