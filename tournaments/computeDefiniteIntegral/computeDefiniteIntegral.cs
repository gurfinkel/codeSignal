double computeDefiniteIntegral(int l, int r, int[] p) {
    var result = 0D;
    var lExp = l;
    var rExp = r;

    for (int i = 0; p.Length > i; ++i) {
        result += (p[i] * (double) (rExp - lExp) / (i + 1));
        lExp *= l;
        rExp *= r;
    }

    return result;
}
