function eulersTotientFunction(n) {
    let result = n;
    let a = 2;

    while (n >= a * a) {
        if (!(n % a)) {
            while (!(n % a)) n /= a;
            result -= result / a;
        }
        ++a;
    }

    if (n > 1) result -= result / n;

    return result;
}
