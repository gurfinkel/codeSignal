function isWheel(adj) {
    const n = adj.length;
    const edges = new Array(n).fill(0);
    
    for (let i = 0; n > i; ++i) {
        if (adj[i][i]) {
            return false;
        }
        
        for (let j = 0; n > j; ++j) {
            if (adj[i][j]) {
                ++edges[i];
            }
        }
    }
    
    const count = new Array(n).fill(0);
    
    for (const item of edges) {
        ++count[item];
    }
    
    return 4 === n && 4 === count[3] || 4 < n && n - 1 === count[3] && 1 === count[n - 1];
}
