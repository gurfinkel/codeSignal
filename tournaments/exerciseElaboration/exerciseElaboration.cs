int exerciseElaboration(int p, int n) {
    var test = p*10+p;

    if (n != 0) {
        test = p*100+p;
    }
    test *= test;

    return getSum(test);
}

int getSum(int n) {
    var result = 0;

    while (n > 0) {
        result += (n % 10);
        n /= 10;
    }

    return result;
}
