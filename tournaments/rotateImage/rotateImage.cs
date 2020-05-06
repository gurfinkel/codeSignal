int[][] rotateImage(int[][] a) {
    var n = a.Length;

    for (var i = 0; (n + 1) >> 1 > i; ++i) {
        for (var j = 0; n >> 1 > j; ++j) {
            int temp = a[n - 1 - j][i];
            a[n - 1 - j][i] = a[n - 1 - i][n - j - 1];
            a[n - 1 - i][n - j - 1] = a[j][n - 1 -i];
            a[j][n - 1 - i] = a[i][j];
            a[i][j] = temp;
        }
    }

    return a;
}
