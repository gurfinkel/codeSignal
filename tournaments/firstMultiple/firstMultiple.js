function firstMultiple(divisors, start) {
    const getGcd = function(a, b) {
        if (!a) return b;
        return getGcd(b % a, a);
    };

    const getLcm = function(a, b) {
        return a * b / getGcd(a, b);
    };

    const lcm = divisors.reduce((x, y) => getLcm(x, y), 1);

    return lcm * Math.ceil(start / lcm);
}
