int numberOfEvenDigits(int n) {
    var r = 0;

    while (0 < n) {
        if (0 == (n & 1)) ++r;
        n /= 10;
    }

    return r;
}
