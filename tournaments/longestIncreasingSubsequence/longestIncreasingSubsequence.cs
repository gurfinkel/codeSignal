int longestIncreasingSubsequence(int[] sequence) {
    var n = sequence.Length;
    var dp = new int[n];
    var result = 1;

    Array.Fill(dp, 1);

    for (var i = 0; n > i; ++i) {
        for (var j = 0; i > j; ++j) {
            if (sequence[i] > sequence[j]) {
                dp[i] = Math.Max(dp[i], dp[j] + 1);
                result = Math.Max(result, dp[i]);
            }
        }
    }

    return result;
}
