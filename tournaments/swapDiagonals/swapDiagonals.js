function swapDiagonals(matrix) {
    const n = matrix.length - 1;

    for (let i = 0; (n + 1) / 2 > i; ++i) {
        [matrix[i][i], matrix[i][n - i]] = [matrix[i][n - i], matrix[i][i]];
        [matrix[n - i][i], matrix[n - i][n - i]] = [matrix[n - i][n - i], matrix[n - i][i]];
    }

    return matrix;
}
