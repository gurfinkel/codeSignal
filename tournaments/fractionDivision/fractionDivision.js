function fractionDivision(a, b) {
    const getGcd = function(x, y) {
        if (!x) return y;
        return getGcd(y % x, x);
    };

    const result = [a[0] * b[1], a[1] * b[0]];
    const gcd = getGcd(result[0], result[1]);

    result[0] = ~~(result[0]/gcd);
    result[1] = ~~(result[1]/gcd);

    return result;
}
