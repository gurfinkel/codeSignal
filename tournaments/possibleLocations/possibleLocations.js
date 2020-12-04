function possibleLocations(n, roads) {
    var ans = [], inf = Infinity
    var g = Array.from(Array(n), () => Array(n).fill(inf) )
    for ([i,v] of roads.entries()) {
        g[i][i] = 0
        for ( [j, d] of v) {
            g[i][j] = d
        }
    }
    
    for ( let k = 0 ; k < n ; k++) {
        for (let i = 0 ; i < n ; i++) {
            for ( let j = 0 ; j < n ; j++){
                if (g[i][k] != inf &&  g[k][j] != inf) {
                    g[i][j] = Math.min(g[i][k] + g[k][j], g[i][j])
                    if (g[k][k] < 0) g[i][j] = -inf
                }
            }
        }
    }
    
    for ( i = 0 ; i < n ; i++){
        for (j = 0 ; j < n ; j++) {
            if (i != j && -inf < g[i][j] && g[i][j] < inf ) ans.push([i,j])
        }
    }
    
    return ans;
}
