function countSumOfTwoRepresentations2(n, l, r) {
    var result = 0;

    for (var a = l; a <= r; a++) {
        var b = n - a;
        if (a>=l && b<=r && a<=b) {
            result++;
        }
    }

    return result;
}
