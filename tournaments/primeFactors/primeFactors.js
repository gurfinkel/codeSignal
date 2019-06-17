function primeFactors(n) {
    const result = [];
    let a = 2;

    while (2 <= n) {
        if (n % a) ++a;
        else {
            result.push(a);
            n = ~~(n / a);
        }
    }

    return result;
}
