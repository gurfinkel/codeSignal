function robotWalk(a) {
    return a.some((b, c) => 2 < c && b >= a[c - 2]);
}
