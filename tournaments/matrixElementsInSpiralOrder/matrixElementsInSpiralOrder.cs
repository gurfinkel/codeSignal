int[] matrixElementsInSpiralOrder(int[][] matrix) {
    if (null == matrix || 0 == matrix.Length) {
        return new int[0];
    }

    var rows = matrix.Length;
    var cols = matrix[0].Length;
    var row = 0;
    var col = 0;
    var idx = 0;
    var n = rows * cols;
    var result = new int[n];

    while (true) {
        for (var i = col; cols > i; ++i) {
            result[idx++] = matrix[row][i];
        }

        if (n == idx) {
            break;
        }

        ++row;

        for (var i = row; rows > i; ++i) {
            result[idx++] = matrix[i][cols - 1];
        }

        if (n == idx) {
            break;
        }

        --cols;

        for (var i = cols - 1; col <= i; --i) {
            result[idx++] = matrix[rows - 1][i];
        }

        if (n == idx) {
            break;
        }

        --rows;

        for (var i = rows - 1; row <= i; --i) {
            result[idx++] = matrix[i][col];
        }

        if (n == idx) {
            break;
        }

        ++col;
    }

    return result;
}
