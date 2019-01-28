bool isLuckyNumber(int n) {
    while (n > 0) {
        var digit = n % 10;
        if (digit != 4 && digit != 7)
            return false;
        n /= 10;
    }
    return true;
}
