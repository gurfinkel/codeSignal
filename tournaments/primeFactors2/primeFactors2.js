function primeFactors2(n) {
    const store = new Set();
    let a = 2;
    while (2 <= n)
        if (n % a) ++a;
        else {
            store.add(a);
            n /= a;
        }
    return [...store.values()];
}
