int[][] minesweeper(bool[][] matrix) {
    var rows = matrix.Length;
    var cols = matrix[0].Length;
    var result = new int[rows][];

    for (int i = 0; rows > i; ++i) {
        result[i] = new int[cols];

        for (int j = 0; cols > j; ++j) {
            result[i][j] = getResult(matrix, rows, i, cols, j);
        }
    }

    return result;
}

int getResult(bool[][] matrix, int rows, int row, int cols, int col) {
    int result = 0;

    for (int i = row - 1; row + 1 >= i; ++i) {
        for (int j = col - 1; col + 1 >= j; ++j) {
            if (0 <= i && 0 <= j && rows > i && cols > j && matrix[i][j] && !(row == i && col == j)) {
                ++result;
            }
        }
    }

    return result;
}
