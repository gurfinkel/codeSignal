function kthDivisor(n, k) {
    let divisor = 1;

    while (k && n >= divisor) {
        if (!(n % divisor)) --k;
        if (k) ++divisor;
    }

    return k ? -1 : divisor;
}
