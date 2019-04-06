function sumBelowBound(bound) {
    let n = 1;
    while (n*(n+1)/2 <= bound) ++n;
    return n-1;
}
