function farmingResources(friendlyTroops, enemyTroops, loggingCamp, impassableCells) {
    var tx, ty,
        i, x, y, s, t,
        q, r,
        x1, y1,
        X, Y,
        friend, enemy;

    // target cell
    [tx, ty]  = loggingCamp;

    // impassableCells
    i = [];
    for ([x, y] of impassableCells)
        i[y + 128 << 8 | x + 128] = 1;

    // start with friendly Troops paths
    [x, y, s] = friendlyTroops;
    q = [[x, y, t = 0]];
    r = []
    r[y + 128 << 8 | x + 128] = 1;
    for ([x, y, t] of q) {
        t += s
        for ([x1, y1] of [[-1,0], [-1,+1], [0,-1], [1,0], [1,-1], [0,1]]) {
            X = x + x1
            Y = y + y1
            if (X == tx && Y == ty) break;
            if (i[Y + 128 << 8 | X + 128] == 1) continue;
            if (r[Y + 128 << 8 | X + 128] == 1) continue;
            r[Y + 128 << 8 | X + 128] = 1
            q.push([X, Y, t]);
        }
        if (X == tx && Y == ty) break;
    }
    friend = t;

    // enemy path
    [x, y, s] = enemyTroops;
    q = [[x, y, t = 0]];
    r = []
    r[y + 128 << 8 | x + 128] = 1;
    for ([x, y, t] of q) {
        t += s
        for ([x1, y1] of [[-1,0], [-1,+1], [0,-1], [1,0], [1,-1], [0,1]]) {
            X = x + x1
            Y = y + y1
            if (X == tx && Y == ty) break;
            if (i[Y + 128 << 8 | X + 128] == 1) continue;
            if (r[Y + 128 << 8 | X + 128] == 1) continue;
            r[Y + 128 << 8 | X + 128] = 1
            q.push([X, Y, t]);
        }
        if (X == tx && Y == ty) break;
    }
    enemy = t;
    return friend < t;
}
