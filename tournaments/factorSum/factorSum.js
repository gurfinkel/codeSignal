function factorSum(n) {
    let result = n;
    let a = 0;
    let b = 0;

    do {
        let c = 2;
        a = result;
        b = result;
        result = 0;

        while (b >= c**2) {
            if (!(b % c)) {
                b /= c;
                result += c;
            } else ++c;
        }

        result += b;
    } while (result !== a);

    return result;
}
