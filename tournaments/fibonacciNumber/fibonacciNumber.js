function fibonacciNumber(n) {
    let a = 0;
    let b = 1;
    let c = 1;
    let count = 2;

    while (n >= count++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}
