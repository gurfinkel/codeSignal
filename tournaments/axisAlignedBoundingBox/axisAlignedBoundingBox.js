function axisAlignedBoundingBox(x, y) {
    const n = x.length;
    let a = x[0];
    let b = x[0];
    let c = y[0];
    let d = y[0];

    for (let i = 1; n > i; ++i) {
        a = Math.min(a, x[i], a);
        b = Math.max(b, x[i], b);
        c = Math.min(c, y[i], c);
        d = Math.max(d, y[i], d);
    }

    return (b - a) * (d - c);
}
