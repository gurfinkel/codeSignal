function computeDefiniteIntegral(l, r, p) {
    let result = 0;
    let a = l;
    let b = r;

    for (let i = 0; p.length > i; ++i) {
        result += (p[i] * (b - a) / (i + 1));
        a *= l;
        b *= r;
    }

    return result;
}
