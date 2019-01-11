function differentValuesInMultiplicationTable(n, m) {
    var result = 0;
    for (var value = 1; value <= n * m; value++) {
        for (var i = 1; i <= Math.min(n, m); i++) {
            if (Math.max(n, m) >= value / i && 0 === value % i) {
                result++;
                break;
            }
        }
    }
    return result;
}
    