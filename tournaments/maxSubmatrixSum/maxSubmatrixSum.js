function maxSubmatrixSum(matrix, n, m) {
    var result = 0;
    for (var i = 0; i + n <= matrix.length; i++) {
        for (var j = 0; j + m <= matrix[0].length; j++) {
            var sum = 0;
            for (var x = 0; x < n; x++) {
                for (var y = 0; y < m; y++) {
                    sum += matrix[i + x][j + y];
                }
            }
            if (i === 0 && j === 0 || sum > result) {
                result = sum;
            }
        }
    }
    return result;
}
