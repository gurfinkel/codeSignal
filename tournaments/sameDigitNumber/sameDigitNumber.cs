bool sameDigitNumber(int n) {
    var digit = n % 10;
    while (0 < n) {
        if (digit != (n % 10)) {
            return false;
        }
        n /= 10;
    }
    return true;
}
