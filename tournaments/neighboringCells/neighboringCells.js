function neighboringCells(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; rows > i; ++i) {
        for (let j = 0; cols > j; ++j) {
            if (i > 0) ++matrix[i][j];
            if (j > 0) ++matrix[i][j];
            if (rows > i + 1) ++matrix[i][j];
            if (cols > j + 1) ++matrix[i][j];
        }
    }

    return matrix;
}
