bool isPrime(int n) {
    for (int i = 2; n >= i * i; ++i)
        if (0 == n % i)
            return false;
    return true;
}
