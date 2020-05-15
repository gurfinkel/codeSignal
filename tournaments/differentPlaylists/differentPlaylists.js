function differentPlaylists(n, k, l) {
    // calculate n! / (n - k)! for the first k different songs. */
    m = 1000000007n
    n = BigInt(n)
    for (s = 1n; n && k * l; k--, l--)
        s = s * n-- % m

    // multiply sum with (n - k) ** (l - k) using binary method.
    for ( ; l; l >>= 1) {
        if (l & 1) s = s * n % m
        n = n * n % m
    }
    // return result
    return Number(s)
}

function differentPlaylistsBruteForce(n, k, l) {
    const getFactorial = (n) => {
        if (1 >= n) return 1;
        return n * getFactorial(n - 1);
    }

    return (n-k) ** (l-k) * ~~(getFactorial(n) / getFactorial(n-k));
}
