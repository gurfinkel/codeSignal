function sumOfDivisors(n) {
    let result = 1;

    for (let i = 2; 1 < n; ++i) {
        i * i > n ? i = n : 0;
        let b = 0;
        while (n % i < 1) {
            let c  = result * i;
            result += c - b;
            b  = c;
            n /= i;
        }
    }

    return result;
}
