function countSumOfTwoRepresentations3(n, l, r) {
    let result = 0;
    let a = 1;

    while (n >= 2 * a) {
        if (l <= a && r >= n - a) ++result;
        ++a;
    }

    return result;
}
