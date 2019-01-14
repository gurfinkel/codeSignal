bool isSkewSymmetricMatrix(int[][] matrix) {
    for (int i = 0; matrix.Length > i; ++i)
        for (int j = 0; matrix[0].Length > j; ++j)
            if (matrix[i][j] != -matrix[j][i])
                return false;
    return true;
}
