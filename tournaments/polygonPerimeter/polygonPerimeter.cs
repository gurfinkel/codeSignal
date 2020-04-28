int polygonPerimeter(bool[][] matrix) {
    var rows = matrix.Length;
    var cols = matrix[0].Length;
    var result = 0;

    for (int i = 0; rows > i; ++i) {
        for (int j = 0; cols > j; ++j) {
            if (matrix[i][j]) {
                if (0 == i) {
                    ++result;
                }

                if (0 == j) {
                    ++result;
                }

                if (rows - 1 == i) {
                    ++result;
                }

                if (cols - 1 == j) {
                    ++result;
                }

                if (0 < i && !matrix[i - 1][j]) {
                    ++result;
                }

                if (rows - 1 > i && !matrix[i + 1][j]) {
                    ++result;
                }

                if (0 < j && !matrix[i][j - 1]) {
                    ++result;
                }

                if (cols - 1 > j && !matrix[i][j + 1]) {
                    ++result;
                }
            }
        }
    }

    return result;
}
