function matrixTransposition(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = new Array(cols);

    for (let col = 0; cols > col; ++col) {
        result[col] = new Array(rows);

        for (let row = 0; rows > row; ++row) {
            result[col][row] = matrix[row][col];
        }
    }

    return result;
}
