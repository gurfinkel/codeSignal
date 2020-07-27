function minDistTriplet(a, b, c) {
    r = 1e9;
    for (u of a) {
        for (v of b) {
            t = Math.abs(u - v);
            if (t < r) {
                for (w of c) {
                    s = t + Math.abs(u - w) + Math.abs(v - w);
                    r = Math.min(r, s);
                }
            }
        }
    }
    return r;
}
