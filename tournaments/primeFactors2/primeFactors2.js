function primeFactors2(n) {
    const factors = new Set();
    let divisor = 2;

    while (2 <= n) {
        if (0 === n % divisor) {
            factors.add(divisor)
            n /= divisor;
        } else {
            ++divisor;
        }
    }

    return [...factors.values()];
}
