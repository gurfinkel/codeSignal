function fractionSum(a, b) {
    const getGcd = function(a, b) {
        if (!a) return b;

        return getGcd(b % a, a);
    }

    const c = a[1] * b[1];
    const d = a[0] * b[1] + b[0] * a[1];
    const gcd = getGcd(c, d);

    return [d/gcd, c/gcd];
}
