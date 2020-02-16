function chessTriangle(n, m) {
    const onBoard = function(x,n,m) {
        return 1 <= x[0] && x[0] <= n && 1 <= x[1] && x[1] <= m;
    };
    
    const rookBishop = function(cell,n,m) {
        let move = 0;
        let moves = [[1,2],[2,1],[-1,-2],[-2,-1],[-1,2],[-2,1],[1,-2],[2,-1]];
        
        for (const x of moves) {
            if (onBoard([cell[0]+x[0],cell[1]+x[1]],n,m)) {
                const i = x[0];
                const j = x[1];
                
                if (onBoard([cell[0]+i,cell[1]+i],n,m)) {
                    ++move;
                }
                
                if (onBoard([cell[0]+j,cell[1]+j],n,m)) {
                    ++move;
                }
                
                if (onBoard([cell[0]+i,cell[1]-i],n,m)) {
                    ++move;
                }
                
                if (onBoard([cell[0]-j,cell[1]+j],n,m)) {
                    ++move;
                }
            }
        }
        
        return move;
    };
    
    if (1 === n || 1 === m || (3 > n && 3 > m)) {
        return 0;
    }
    
    let output = 0;
    
    for (let x = 1; n + 1 > x; ++x) {
        for (let y = 1; m + 1 > y; ++y) {
            output += rookBishop([x, y], n, m);
        }
    }
    
    return output << 1;
}
