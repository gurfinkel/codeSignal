function fractionReducing(fraction) {
    const getGcd = function(a, b) {
        if (!a) return b;
        return getGcd(b%a, a);
    };

    const gcd = getGcd(fraction[0], fraction[1]);

    return [fraction[0]/gcd, fraction[1]/gcd];
}
