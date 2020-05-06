function rowsRearranging(matrix) {
    let sorted = matrix.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted[i].length; j++) {
            if (sorted[i][j] >= sorted[i + 1][j]) {
                return false;
            }
        }
    }
    return true;
}
