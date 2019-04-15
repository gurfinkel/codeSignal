function countSumOfTwoRepresentations2(n, l, r) {
    let result = 0;

    while (l <= r) {
        if (n - l <= r && l << 1 <= n) ++result;
        ++l;
    }

    return result;
}
