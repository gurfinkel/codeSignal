function neighbouringElements(a) {
    let result = 0;
    const rows = a.length;
    const cols = a[0].length;

    for (let row = 1; rows - 1 > row; ++row) {
        for (let col = 0; cols > col; ++col) {
            if (a[row - 1][col] === a[row][col]) {
                ++result;
            }

            if (a[row + 1][col] === a[row][col]) {
                ++result;
            }
        }
    }

    for (let col = 1; cols - 1 > col; ++col) {
        for (let row = 0; rows > row; ++row) {
            if (a[row][col - 1] === a[row][col]) {
                ++result;
            }

            if (a[row][col + 1] === a[row][col]) {
                ++result;
            }
        }
    }

    return result;
}
