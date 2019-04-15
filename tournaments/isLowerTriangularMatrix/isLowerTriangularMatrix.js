function isLowerTriangularMatrix(matrix) {
    const n = matrix.length;

    for (let i = 0; n > i; ++i)
        for (let j = 1 + i; n > j; ++j)
            if (matrix[i][j]) return false;

    return true;
}
