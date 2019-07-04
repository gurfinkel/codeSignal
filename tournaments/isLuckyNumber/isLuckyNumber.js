function isLuckyNumber(n) {
    while (0 < n) {
        if (4 !== n % 10 && 7 !== n % 10) return false;
        n = ~~(n / 10);
    }

    return true;
}
