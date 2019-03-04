function findPath(matrix) {
    const getNext = (i, j, item) => {
        for (const [dRow, dCol] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
            if ((i + dRow) in matrix && (j + dCol) in matrix[0] && matrix[(i + dRow)][(j + dCol)] === 1 + item) {
                return [(i + dRow), (j + dCol)];
            }
        }

        throw new Error();
    };

    const getStart = () => {
        for (let i = 0; rows > i; ++i) {
            for (let j = 0; cols > j; ++j) {
                if (1 === matrix[i][j]) {
                    return [i, j];
                }
            }
        }

        throw new Error();
    };

    const rows = matrix.length;
    const cols = matrix[0].length;
    const count = rows * cols;
    let index = 1;
    let [row, col] = getStart();

    while (count > index) {
        try {
            [row, col] = getNext(row, col, index);
            ++index;
        } catch(e) {
            return false;
        }
    }

    return true;
}
