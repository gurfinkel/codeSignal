function evenDigitsOnly(n) {
    while (n) {
        if ((n % 10) & 1) return false;
        n = ~~(n / 10);
    }

    return true;
}
