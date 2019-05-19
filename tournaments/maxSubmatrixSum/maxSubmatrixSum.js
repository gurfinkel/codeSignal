function maxSubmatrixSum(matrix, n, m) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let result = 0;

    for (let i = 0; rows >= i + n; ++i) {
        for (let j = 0; cols >= j + m; ++j) {
            let a = 0;
            for (let x = 0; n > x; ++x) {
                for (let y = 0; m > y; ++y) {
                    a += matrix[i + x][j + y];
                }
            }
            if (!i && !j || a > result) result = a;
        }
    }

    return result;
}
