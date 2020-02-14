function commonPoints(l1, r1, l2, r2) {
    return Math.max(Math.min(r1, r2) - Math.max(l1, l2) - 1, 0);
}
