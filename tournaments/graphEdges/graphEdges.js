function graphEdges(matrix) {
    let result = 0;

    for (let i = 1; matrix.length > i; ++i)
        for (let j = 0; i > j; ++j)
            result += matrix[i][j];

    return result;
}
