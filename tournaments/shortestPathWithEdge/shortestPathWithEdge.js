function shortestPathWithEdge(start, finish, weight, graph) {
    const result = [];
    const p = [];
    
    --start;
    --finish;
    
    graph[start].map((v, i) => {
        result[i] = v ? v : i === start ? 0 : weight;
        p[i] = !v & i !== start;
    });
    
    for (const i in graph) {
        for (const j in graph) {
            const x = graph[i][j];
            const y = result[i];
            const z = x ? x : p[i] ? 1e9 : weight;
            
            if (y + z < result[j]) {
                result[j] = y + z;
                p[j] = p[i] | !x;
            }
        }
    }
    
    return result[finish];
}
