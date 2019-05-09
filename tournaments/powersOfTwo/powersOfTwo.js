function powersOfTwo(n) {
    const result = [];
    let a = 1;

    while (0 < n) {
        if (n & 1) result.push(a);
        n >>= 1;
        a <<= 1;
    }

    return result;
}
