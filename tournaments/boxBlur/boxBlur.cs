int[][] boxBlur(int[][] image) {
    var rows = image.Length;
    var cols = image[0].Length;
    var result = new int[rows - 2][];

    for (int i = 1; rows - 1 > i; ++i) {
        result[i - 1] = new int[cols - 2];

        for (int j = 1; cols - 1 > j; ++j) {
            result[i - 1][j - 1] = getPixel(image, i, j);
        }
    }

    return result;
}

int getPixel(int[][] image, int row, int col) {
    int result = 0;

    result += image[row - 1][col - 1];
    result += image[row - 1][col];
    result += image[row - 1][col + 1];

    result += image[row][col - 1];
    result += image[row][col];
    result += image[row][col + 1];

    result += image[row + 1][col - 1];
    result += image[row + 1][col];
    result += image[row + 1][col + 1];

    return result/9;
}
