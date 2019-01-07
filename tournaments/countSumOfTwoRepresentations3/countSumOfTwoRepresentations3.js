function countSumOfTwoRepresentations3(n, l, r) {
    let result = 0;

    for (let i = 1; n - 1 >= i; ++i) {
        if (n - i <= r && l <= i ) {
            ++result;
        }
    }

    return result;
}
