int comfortableNumbers(int l, int r) {
    var result = 0;

    for (var i = l; r >= i; ++i) {
        var iSum = getSumOfDigits(i);
        for (var j = i + 1; Math.Min(i+iSum,r) >= j; ++j) {
            var jSum = getSumOfDigits(j);

            if (i >= j - jSum) {
                ++result;
            }
        }
    }

    return result;
}

int getSumOfDigits(int n) {
    var result = 0;

    while (0 < n) {
        result += n % 10;
        n /= 10;
    }

    return result;
}
