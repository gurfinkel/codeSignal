function amazonCheckmate(king, amazon) {
    const safeSquares = function(x, y, dx, dy, dx1, dy1) {
        if (x+y === dx+dy && ((dx1+dy1 !== dx+dy) || (dx1+dy1 === dx+dy && !direction(x,y,dx,dy,dx1,dy1))))
            return false;

        if (x-y === dx-dy && ((dx1-dy1 !== dx-dy) || (dx1-dy1 === dx-dy && !direction(x,y,dx,dy,dx1,dy1))))
            return false;

        if (x === dx && (dx1 !== dx || (dx1 === dx && !direction(x,y,dx,dy,dx1,dy1))))
            return false;

        if (y === dy && (dy1 !== dy || (dy1 === dy && !direction(x,y,dx,dy,dx1,dy1))))
            return false;

        for (const [x1,y1] of [[-1,-2],[-1,2],[1,-2],[1,2],[-2,-1],[-2,1],[2,-1],[2,1]] )
            if (x === x1 + dx && y === y1 + dy)
                return false;

        return true;
    };

    const direction = function(x, y, dx, dy, dx1, dy1) {
        return !Math.round(distance(dx,dy,dx1,dy1) - distance(dx,dy,x,y) + distance(dx1,dy1,x,y));
    };
    const distance = function(x, y, x1, y1) {
        return ((x-x1)**2 + (y-y1)**2)**.5;
    };

    let mark = Array.from({length : 8}, _ => Array(8).fill(true));
    let hash = { a : 0 , b : 1 , c: 2 , d: 3 , e : 4 , f : 5 , g : 6, h : 7 };
    let results = [0,0,0,0];
    for (const [dx , dy] of [[-1,-1],[-1,0],[-1,1],[1,-1],[1,0],[1,1],[0,-1],[0,0],[0,1]] ) {
        const y = hash[king[0]] + dy;
        const x = 8 - +king[1] + dx;
        if (0 <= x && 8 > x && 0 <= y && 8 > y)
            mark[x][y] = false;
    }

    const [amazonX, amazonY] = [8 - +amazon[1], hash[amazon[0]]];
    mark[amazonX][amazonY] = !mark[amazonX][amazonY] ? false : "O";

    for (let i = 0 ; i < 8 ; i++) {
        for (let j = 0 ; j < 8 ; j++) {
            if (!mark[i][j] || (i === amazonX && j === amazonY))
                continue;
            if (safeSquares(i, j, amazonX, amazonY, 8 - +king[1], hash[king[0]]))
                mark[i][j] = "O";
            else
                mark[i][j] = "+";
        }
    }

    for (let i = 0; 8 > i; i++) {
        for (let j = 0 ; 8 > j; ++j) {
            if (!mark[i][j] || (i === amazonX && j === amazonY))
                continue;

            let pos = [];
            for (const [dx,dy] of [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]) {
                let x = dx + i;
                let y = dy + j;
                if (x >= 0 && x < 8 && y >= 0 && y < 8)
                    pos.push(mark[x][y]);
            }

            if (pos.every(e => e === "+" || !e || e === "X"))
                mark[i][j] = mark[i][j] === "O" ? "S" : "X";
        }
    }

    mark.map((e,i) =>
        e.map((f, j) =>
            i === amazonX && j === amazonY ? 0 :
                f === "X" ? results[0]++ :
                    f === "+" ? results[1]++ :
                        f === "S" ? results[2]++ :
                            f === "O" ? results[3]++ : 0)
    );

    return results;
}
