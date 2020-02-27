function boxBlur(image) {
    const getPixel = function(row, col) {
        let r = 0;

        for (let i = -1; 1 >= i; ++i) {
            for (let j = -1; 1 >= j; ++j) {
                r += image[row + i][col + j];
            }
        }

        return ~~(r / 9);
    };

    const [rows, cols] = [image, image[0]].map(arr => arr.length);
    const result = Array(rows - 2).fill([]).map(_ => Array(cols - 2).fill(0));

    for (let row = 1; rows - 1 > row; ++row) {
        for (let col = 1; cols - 1 > col; ++col) {
            result[row - 1][col - 1] = getPixel(row, col);
        }
    }

    return result;
}
