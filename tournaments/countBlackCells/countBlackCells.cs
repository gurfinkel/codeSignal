int countBlackCells(int n, int m) {
    if (n == m) return (n + 2 * (n - 1));
    if (n == 1 || m == 1) return n * m;

    return n + m - gcd(n, m) + ((gcd(n, m) - 1) << 1);
}

int gcd(int a, int b) {
    if (0 == b) {
        return a;
    }

    return gcd(b, a % b);
}
