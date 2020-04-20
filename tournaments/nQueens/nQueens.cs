int[][] nQueens(int n) {;
    List<int[]> result = new List<int[]>();

    if (0 >= n) {
        return result.ToArray();
    }

    int[] colx = new int[n];
    compute(result, n, 0, colx);

    return result.ToArray();
}

void compute(List<int[]> output, int len, int row, int[] columns) {
    if (row == len) {
        output.Add(columns.ToList().Select(x => ++x).ToArray());
        return;
    }

    for (int col = 0; col < len; col++) {
        if (canQueenBePlaced(row, col, columns)) {
            columns[row] = col;
            compute(output, len, row + 1, columns);
        }
    }
}

bool canQueenBePlaced(int row1, int column1, int[] columns1) {
    for (int row2 = 0; row2 < row1; row2++) {
        int column2 = columns1[row2];

        if (column1 == column2) {
            return false;
        }

        int dColumn = Math.Abs(column2 - column1);
        int dRow = row1 - row2;

        if (dColumn == dRow) {
            return false;
        }
    }

    return true;
}
