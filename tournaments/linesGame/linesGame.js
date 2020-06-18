function linesGame(field, clicks, newBalls, newBallsCoordinates) {
    var i = 0,
        score = 0;
    checkField = () => {
        var line  = 0,
            balls = [],
            marked = {2: [], 4: [], 5: [], 6: []};
        for (var y = 0; y < 9; y++)
            for (var x = 0; x < 9; x++)
                if (field[y][x] != '.')
                    for (var [dy, dx] of [[0, 1], [1,1], [1, 0], [1, -1]]) {
                        if (marked[dy * 4 + dx + 1][y * 9 + x])
                            continue;
                        var Y = 0,
                            X = 0;
                        while (cell(y + Y, x + X) == field[y][x])
                            Y += dy, X += dx
                        if (Y > 4 || X > 4) {
                            line++;
                            while (Y != 0 || X != 0) {
                                Y -= dy;
                                X -= dx;
                                marked[dy * 4 + dx + 1][(y + Y) * 9 + x + X] = 1;
                                balls.push([y + Y, x + X]);
                            }
                        }
                    }
        if (line) {
            score += line + balls.length - 1;
            for ([y, x] of balls)
                field[y][x] = '.'
            console.log(line, balls, score, field);
            return true;
        }
        return false;
    }
    clearPath = (Y, X, y, x) => {
        console.log("path", Y, X, y, x)
        var queue = [[Y, X]],
            visited = []
        for ([Y, X] of queue) {
            if (Y == y && X == x)
                return true;
            for ([dy, dx] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
                dx += X
                dy += Y
                if (cell(dy, dx) && !visited[dy * 9 + dx]) {
                    visited[dy * 9 + dx] = 1;
                    if (cell(dy, dx) == '.')
                        queue.push([dy, dx]);
                }
            }
        }
        return false;
    }
    cell = (y, x) => field[y] ? field[y][x] : false

    var failed = 0,
        Y = false,
        X = -1;
    for (var [y, x] of clicks) {
        //if (checkField()) aaa;
        if (field[y][x] != '.') {
            [Y, X] = [y, x];
            //failed = 0;
            continue;
        } else if (Y > -1 && field[y][x] == '.' && clearPath(Y, X, y, x)) {
            field[y][x] = field[Y][X];
            field[Y][X] = '.';
            if (checkField()) {
                failed = 0;
                Y = X = -1;
                continue;
            }
        } else if (++failed < 2)
            continue;

        //console.log(field);

        for (var j = 0; j < 3 && newBallsCoordinates[i]; j++) {
            [y, x] = newBallsCoordinates[i];
            field[y][x] = newBalls[i++];
        }
        checkField();
        failed = 0;
        Y = X = -1;
    }
    return score;
}
