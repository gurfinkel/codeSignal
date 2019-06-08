function maxDigit(n) {
    let result = 0;

    while (0 < n) {
        result = Math.max(result, n % 10);
        n = ~~(n / 10);
    }

    return result;
}
