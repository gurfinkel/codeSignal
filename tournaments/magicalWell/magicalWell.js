function magicalWell(a, b, n) {
    let r = 0;
    while (n--) {
        r += a++ * b++;
    }
    return r;
}
