function isDiagonalMatrix(matrix) {
    const n = matrix.length;

    for (let i = 0; n > i; ++i)
        for (let j = 0; n > j; ++j)
            if (i !== j && matrix[i][j])
                return false;

    return true;
}
