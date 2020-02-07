function kpalindrome(s, k) {
    const lcs = function(a, b) {
        const rows = a.length;
        const cols = b.length;
        const dp = Array(1 + rows).fill([]).map(_ => Array(1 + cols));

        // Following steps build dp[m+1][n+1] in bottom up fashion.
        // Note that dp[i][j] contains length of LCS of a[0..i-1] and b[0..j-1].
        for (let i = 0; rows >= i; ++i) {
            for (let j = 0; cols >= j; ++j) {
                if (!i || !j) {
                    dp[i][j] = 0;
                } else if (a[i - 1] === b[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        // dp[rows][cols] contains length of LCS for a and b
        return dp[rows][cols];
    };

    // Find reverse of string
    const revStr = [...s].reverse().join('');
    // Find longest palindromic subsequence of given string
    const lps = lcs(s, revStr);
    // If the difference between longest palindromic subsequence and the original
    // string is less than equal to k, then the string is k-palindrome
    return (s.length - lps <= k);
}
