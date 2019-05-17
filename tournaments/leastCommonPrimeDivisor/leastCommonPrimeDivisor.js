function leastCommonPrimeDivisor(a, b) {
    for (let c = 2; 1 < a && 1 < b; ++c) {
        if (!(a % c) && !(b % c)) return c;
        while (!(a % c)) a = ~~(a/c);
        while (!(b % c)) b = ~~(b/c);
    }
    return -1;
}
