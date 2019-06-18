function differentSquares(matrix) {
    const store = new Set();

    if (1 === matrix.length && 1 === matrix[0].length)
        return 0;

    for (let i = 1; i in matrix; ++i) {
        for (let j = 1; j in matrix[0]; ++j) {
            let hash = matrix[i - 1][j - 1] * 1000;
            hash += matrix[i - 1][j] * 100;
            hash += matrix[i][j - 1] * 10;
            hash += matrix[i][j];

            store.add(hash);
        }
    }

    return store.size;
}
