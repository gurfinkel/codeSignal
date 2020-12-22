function walkingInTheWoods(n, wmap) {
    a = Array(n).fill().map((v, i) => [i])
    p = new Uint32Array(n).map((v, i) => i)
    for ([x, y] of wmap) {
        A = p[x]
        B = p[y]
        if (A != B) {
            for (y of a[B])
                p[y] = A,
                    a[A].push(y)
            n--
        }
    }
    return n - 1
}
