function amazonCheckmate(king, amazon) {
    // create 8x8 board
    M = Math.abs
    board = Array(8).fill(0);
    board = board.map(a => [...board]);

    // get king and amazon coordinates
    [kx, ky, ax, ay] = Buffer(king + amazon).map(a => a % 16 - 1);

    // set attacked positions at board[y][x]
    for (y = 0; y < 8; y++) {
        for (x = 0; x < 8; x++) {
            dky = ky - y;
            dkx = kx - x;
            day = ay - y;
            dax = ax - x;
            // set amazon moves
            if (day | dax) {
                // like a king
                if (M(day) < 2 && M(dax) < 2) board[y][x] = 1;
                // like a knight
                if (M(day) * M(dax) == 2) board[y][x] = 1;
                // diagonal moves
                if (M(day) == M(dax))
                    if (M(dky) != M(dkx) || day * dky <= 0 || dax * dkx <= 0 || M(day) <= M(dky))
                        board[y][x] = 2;
                // vertical moves
                if (ay == y)
                    if (ky != y || dax * dkx <= 0 || M(dax) <= M(dkx))
                        board[y][x] = 2;
                // horizontal moves
                if (ax == x)
                    if (kx != x || day * dky <= 0 || M(day) <= M(dky))
                        board[y][x] = 2;
            }
            // set king moves and set unusable places
            if (dky | dkx) {
                if (M(dky) < 2 && M(dkx) < 2) board[y][x] = 3;
            }
        }
    }

    ret = [0,0,0,0];
    for (y = 0; y < 8; y++) {
        for (x = 0; x < 8; x++) {
            if (y == ay && x == ax || y == ky && x == kx || board[y][x] == 3)
                continue;
            neighbors = 8;
            for (i = 0; i < 9; i++) {
                y2 = y + (i / 3 | 0) - 1;
                x2 = x + i % 3 - 1;
                if (x != x2 || y != y2)
                    neighbors -= y2 in board && x2 in board ? board[y2][x2] > 0 : 1;
            }
            ret[2 * !board[y][x] + !!neighbors]++;
        }
    }
    // test:
    //board[ay][ax] = 7;
    //board[ky][kx] = 8;
    //return board.reverse();
    return ret;
}
