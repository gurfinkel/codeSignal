function isBull(adj) {
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
    
    const counts = new Array(n).fill(0);
    
    for (const item of edges) {
        ++counts[item];
    }
    
    if (counts[4] === 1 && counts[1] === 2 && counts[2] === 2) {
        return true;
    }
    
    if (counts[3] === 2 && counts[2] === 1 && counts[1] === 2) {
        const c2 = new Array(2);
        let idx2 = 0;
        
        for (let i = 0; i < n; i++) {
            if (edges[i] == 3) {
                c2[idx2++] = i;
            }
        }
        
        if (adj[c2[0]][c2[1]]) {
            for (let i = 0; i < n; i++) {
                if (edges[i] == 2) {
                    if (adj[i][c2[0]] && adj[i][c2[1]]) {
                        return true;
                    }
                }
            }
        }
    }
    
    if (counts[3] == 1 && counts[2] == 3 && counts[1] == 1) {
        for (let a = 0; a < n; a++) {
            for (let b = 0; b < n; b++) {
                for (let c = 0; c < n; c++) {
                    if (edges[a] == 3 && adj[a][b] && adj[b][c] && adj[c][a]) {
                        return true;
                    }
                }
            }
        }
    }
    
    return false;
}
