function differentValuesInMultiplicationTable2(n, m) {
    var arr = [];
    for (var i = 0; i <= n; i++) {
        arr[i] = [];
        for (var j = 0; j <= m; j++) {
            arr[i][j] = i * j;
        }
    }
    var newArr = [];
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= m; j++) {
            if (newArr.indexOf(arr[i][j]) < 0) {
                newArr.push(arr[i][j]);
            }
        }
    }
    return newArr.length;
}