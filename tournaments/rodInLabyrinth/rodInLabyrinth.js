function rodInLabyrinth(labyrinth) {
    h = labyrinth.length
    w = labyrinth[0].length
    q = [[0,1,0]]
    v = []
    n = e = 0
    g = y => labyrinth[y] || []
    f = (y, x, d) => (d ? g(y - 1)[x] + g(y + 1)[x] : g(y)[x - 1] + g(y)[x + 1]) + g(y)[x] == '...' &&
        r.push([y, x, d]) | (e += y == h - 1 & x == w - 2 | y == h - 2 & x == w - 1)

    while (q.length) {
        r = []
        for ([y, x, d] of q) {
            if (v[[y, x, d]]) continue
            v[[y, x, d]] = 1
            f(y, x - 1, d) * f(y, x + 1, d) && d && f(y, x, 0)
            f(y - 1, x, d) * f(y + 1, x, d) && !d && f(y, x, 1)
            if (e)
                return n + 1
        }
        q = r
        n++
    }
    return -1
}
