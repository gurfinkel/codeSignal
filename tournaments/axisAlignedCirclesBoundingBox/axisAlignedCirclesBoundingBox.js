function axisAlignedCirclesBoundingBox(x, y, r) {
    let a = Number.MAX_SAFE_INTEGER;
    let b = Number.MIN_SAFE_INTEGER;
    let c = Number.MAX_SAFE_INTEGER;
    let d = Number.MIN_SAFE_INTEGER;

    for (let i = 0; x.length > i; ++i) {
        b = Math.max(b, x[i] + r[i]);
        a = Math.min(a, x[i] - r[i]);
        d = Math.max(d, y[i] + r[i]);
        c = Math.min(c, y[i] - r[i]);
    }

    return (b - a) * (d - c);
}
