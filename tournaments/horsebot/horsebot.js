function horsebot(n, m) {
    f = (y, x) => {
        if (x < 0 | x >= m | a[y * m + x] !== 0)
            return 0
        if (y == n - 1 && x == m - 1)
            return 1
        a[y * m + x] = 1
        return  f(y - i, x - j) |
            f(y - i, x + j) |
            f(y + i, x - j) |
            f(y + i, x + j) |
            f(y - j, x - i) |
            f(y - j, x + i) |
            f(y + j, x - i) |
            f(y + j, x + i)
    }

    o = n > m ? n : m
    for (i = x = 0; i++ < o; )
        for (j = i; j <= o; j++)
            x += f(0, 0, a = Buffer.alloc(n * m))

    return x
}
