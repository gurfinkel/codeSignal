int sumOfPowers(int n, int divisor) {
    var result = 0;

    for (var i = 1; n >= i; ++i) {
        var p = 0;

        while (0 == i % (Math.Pow(divisor, p))) {
            ++p;
        }

        result += --p;
    }

    return result;
}
