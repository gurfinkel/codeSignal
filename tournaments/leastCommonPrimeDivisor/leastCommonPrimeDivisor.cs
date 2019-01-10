int leastCommonPrimeDivisor(int a, int b) {
    for (int divisor = 2; a > 1 && b > 1; divisor++) {
        if (a % divisor == 0 && b % divisor == 0) {
            return divisor;
        }
        while (a % divisor == 0) {
            a /= divisor;
        }
        while (b % divisor == 0) {
            b /= divisor;
        }
    }

    return -1;
}
