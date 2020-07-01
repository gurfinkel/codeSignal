f = knightOnBoardProbability = (m, n, s, x, y) =>
    x < 0 | x >= m | y < 0 | y >= n ?
        0
        :
        s ?
            (a = f['' + x + y + s]) ?
                a
                : (
                    p = 0,
                        [[-2, -1], [-2, 1], [-1, -2], [-1, 2]].map(([i, j]) =>
                            p += f(m, n, s - 1, x + i, y + j) / 8 + f(m, n, s - 1, x - i, y - j) / 8
                        ),
                        f['' + x + y + s] = p
                )
            :
            1
