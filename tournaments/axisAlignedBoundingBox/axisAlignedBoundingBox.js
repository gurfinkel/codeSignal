function axisAlignedBoundingBox(x, y) {
    let [a, b, c, d] = [x[0], x[0], y[0], y[0]];

    for (let i = 1; i in x; ++i) {
        a = Math.min(a, x[i]);
        b = Math.max(b, x[i]);
        c = Math.min(c, y[i]);
        d = Math.max(d, y[i]);
    }
    return (b - a) * (d - c);
}
