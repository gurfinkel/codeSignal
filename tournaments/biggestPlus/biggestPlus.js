function biggestPlus(matrix) {
    s = 0;
    h = matrix.length;
    w = matrix[0].length;

    for (i = 1; i < h - 1; i++) {
        for (j = 1; j < w - 1; j++) {
            if (matrix[i][j] > 0 && Math.min(i, j, h - i, w - j) > s) {
                k = 1
                while (
                    i - k >= 0
                    && i + k < h
                    && j - k >= 0
                    && j + k < w
                    && matrix[i - k][j] > 0
                    && matrix[i + k][j] > 0
                    && matrix[i][j - k] > 0
                    && matrix[i][j + k] > 0
                    ) k++
                if (--k) s = k > s ? k : s
            }
        }
    }
    return s;
}
