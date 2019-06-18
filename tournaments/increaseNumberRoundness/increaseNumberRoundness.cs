bool increaseNumberRoundness(int n) {
    var isZeroFound = false;
    var isNotZeroFound = false;

    while (0 < n) {
        var nextDigit = n % 10;
        n /= 10;

        if (0 == nextDigit) {
            if (isNotZeroFound) {
                isZeroFound = true;
            }
        } else {
            if (isZeroFound) {
                return true;
            } else {
                isNotZeroFound = true;
            }
        }
    }

    return false;
}
