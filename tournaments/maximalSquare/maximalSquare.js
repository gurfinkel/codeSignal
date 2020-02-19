function maximalSquare(matrix) {
    if (!matrix || !matrix.length) {
        return 0;
    }

    const [rows, cols] = [matrix, matrix[0]].map(arr => arr.length);
    let maxLength = 0;

    const dp = Array(1 + rows).fill([]).map(_ => Array(1 + cols).fill(0));

    for (let i = 1; rows >= i; i++) {
        for (let j = 1; cols >= j; j++) {
            if (+matrix[i - 1][j - 1]) {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
                maxLength = Math.max(dp[i][j], maxLength);
            }
        }
    }

    return maxLength * maxLength;
}
