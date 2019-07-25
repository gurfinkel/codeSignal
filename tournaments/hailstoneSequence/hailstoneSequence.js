function hailstoneSequence(n) {
    let result = 0;

    while (1 !== n) {
        if (n & 1) n = 1 + 3 * n;
        else n >>= 1;
        ++result;
    }

    return result;
}
