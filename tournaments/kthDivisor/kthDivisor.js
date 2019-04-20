function kthDivisor(n, k) {
    let result = 1;
    while (0 < k && result <= n) {
        if (!(n % result)) --k;
        if (k) ++result;
    }
    return !k ? result : -1;
}
