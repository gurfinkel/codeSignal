function primeFactors2(n) {
    const r = [];

    for (let x = 1; x++ < 4e4;) {
        for (n % x || r.push(x); n % x < 1;) {
            n /= x;
        }
    }

    if (n > 1) {
        r.push(n);
    }

    return r;
}
