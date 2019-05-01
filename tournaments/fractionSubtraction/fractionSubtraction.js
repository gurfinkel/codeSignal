function fractionSubtraction(a, b) {
    let c = a[1] !== b[1] ? [a[0] * b[1] - b[0] * a[1], a[1] * b[1]] : [a[0] - b[0], a[1]];

    for (let i = 2; Math.min(...c) + 1 > i; ++i)
        if (!(c[0] % i) && !(c[1] % i))
            c = [c[0] / i, c[1] / i];

    return c;
}
