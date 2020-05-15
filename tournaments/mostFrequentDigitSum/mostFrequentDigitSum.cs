int mostFrequentDigitSum(int n) {
    if (10 > n) {
        return n;
    }

    var result = 0;
    var max = int.MinValue;
    var store = new int[100];

    while (0 < n) {
        var digitSum = getDigitSum(n);
        ++store[digitSum];
        n -= digitSum;
    }

    for (int i = 0; store.Length > i; ++i) {
        if (max <= store[i]) {
            max = store[i];
            result = i;
        }
    }

    return result;
}

int getDigitSum(int n) {
    var result = 0;

    while (0 < n) {
        result += n % 10;
        n /= 10;
    }

    return result;
}
