function isIncreasingDigitsSequence(n) {
    let digit = n%10;
    n = ~~(n/10);

    while (0 < n) {
        if (digit <= n%10) return false;
        digit = n%10;
        n = ~~(n/10);
    }

    return true;
}

