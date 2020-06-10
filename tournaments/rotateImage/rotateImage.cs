int[][] rotateImage(int[][] a) {
    transpose(a);
    reverseRows(a);

    return a;
}

private void transpose(int[][] a) {
    var n = a.Length;

    for (var i = 0; n - 1 > i; ++i) {
        for (var j = 1 + i; n > j; ++j) {
            var tmp = a[i][j];
            a[i][j] = a[j][i];
            a[j][i] = tmp;
        }
    }
}

private void reverseRows(int[][] a) {
    var n = a.Length;

    for (var i = 0; n > i; ++i) {
        for (var j = 0; (n >> 1) > j; ++j) {
            var tmp = a[i][j];
            a[i][j] = a[i][n - j - 1];
            a[i][n - j - 1] = tmp;
        }
    }
}
