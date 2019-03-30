function extractMatrixColumn(matrix, column) {
    const rows = matrix.length;
    const result = new Array(rows);

    for (let i = 0; rows > i; ++i) {
        result[i] = matrix[i][column];
    }

    return result;
}
