int digitDistanceNumber(int n) {
    var result = 0;
    var lastDigit = n % 10;
    var tenPower = 1;

    n /= 10;

    while (0 < n) {
        result += tenPower * Math.Abs(n % 10 - lastDigit);
        tenPower *= 10;
        lastDigit = n % 10;
        n /= 10;
    }

    return result;
}
