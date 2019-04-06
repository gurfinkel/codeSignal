function isInfiniteProcess(a, b) {
    return a > b || 1 === ((b - a) & 1);
}
