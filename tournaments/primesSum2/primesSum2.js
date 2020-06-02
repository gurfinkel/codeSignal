function primesSum2(n) {
    if (n == 1) return 0;

    let result = 0;

    const prime = new Array(n + 1).fill(true);

    for (let p = 2; p * p <= n; ++p)
        if (prime[p])
            for (let x = p * 2; x <= n; x += p)
                prime[x] = false;

    for (let p = 2; p <= n; ++p)
        if (prime[p])
            result += p;

    return result;
}
