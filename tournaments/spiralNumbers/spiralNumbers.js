function spiralNumbers(n) {
    const result = new Array(n).fill(0).map(row => new Array(n).fill(0));
    let rows = n - 1;
    let cols = n - 1;
    let row = 0;
    let col = 0;
    let dir = 0;
    let i = 1;

    while (n * n >= i) {
        if (0 == dir) {
            for (let j = col; rows >= j; ++j) result[row][j] = i++;
            ++row; dir = 1;
        } else if (1 == dir) {
            for (let j = row; cols >= j; ++j) result[j][rows] = i++;
            --rows; dir = 2;
        } else if (2 == dir) {
            for (let j = rows; col <= j; --j) result[cols][j] = i++;
            --cols; dir = 3;
        } else if (3 == dir) {
            for (let j = cols; row <= j; --j) result[j][col] = i++;
            ++col; dir = 0;
        }
    }
    
    return result;
}
