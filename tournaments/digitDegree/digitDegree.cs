int digitDegree(int n) {
    var result = 0;

    while (10 <= n) {
        n = getSumOfDigits(n);
        ++result;
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
