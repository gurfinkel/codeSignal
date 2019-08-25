function matrixElementsSum(matrix) {
    const damagedColumns = new Array(5);
    const rows = matrix.length;
    const cols = matrix[0].length;
    let result = 0;

    for (let i = 0; rows > i; ++i) {
        for (let j = 0; cols > j; ++j) {
            if (!matrix[i][j]) {
                damagedColumns[j] = 1;
            } else if (!damagedColumns[j]) {
                result += matrix[i][j];
            }
        }
    }

    return result;
}
