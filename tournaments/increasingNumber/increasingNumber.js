function increasingNumber(x, n) {
    for (let i = 1; n >= i; ++i)
        while (x % i) ++x;
    return x;
}
