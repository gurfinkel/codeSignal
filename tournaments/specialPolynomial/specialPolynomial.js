function specialPolynomial(x, n) {
    let result = 0;
    let a = 0;

    while (n > a) {
        ++result;
        a += x ** result;
    }

    return result - 1;
}
