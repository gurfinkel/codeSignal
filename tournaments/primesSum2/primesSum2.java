int primesSum2(int n) {
    boolean[] isNotPrime = new boolean[n + 1];
    int sum = 0, mod = 1000000007;
    for (int i = 2; i <= n; i++) {
        if (!isNotPrime[i]) {
            if (i * i <= n)
                for (int j = 2 * i; j <= n; j += i)
                    isNotPrime[j] = true;
            sum = (sum + i) % mod;
        }
    }
    return sum;
}
