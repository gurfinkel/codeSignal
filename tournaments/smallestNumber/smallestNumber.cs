int smallestNumber(int n) {
    if (1 == n) {
        return 0;
    }

    int res = 1;

    for (int i = 1; n > i; ++i) {
        res *= 10;
    }

    return res;
}
