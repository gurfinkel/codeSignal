function neighboringCells(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i > 0) {
                matrix[i][j]++;
            }
            if (j > 0) {
                matrix[i][j]++;
            }
            if (i + 1 < matrix.length) {
                matrix[i][j]++;
            }
            if (j + 1 < matrix[0].length) {
                matrix[i][j]++;
            }
        }
    }
    return matrix;
}
