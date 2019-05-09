function evenDigitsOnly(n) {
    while (0 < n) {
        if ((n % 10) & 1) return false;
        n = ~~(n / 10);
    }

    return true;
}
