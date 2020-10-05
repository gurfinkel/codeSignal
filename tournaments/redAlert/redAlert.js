function redAlert(nodes, corridor, k) {
    const store = []
    let q = new Set([1]);
    let idx = 0;
    
    for (let i = 0; i in corridor; ) {
        const a = corridor[i++];
        const b = corridor[i++];
        store[b] ? store[b].push(a) : store[b] = [a];
        store[a] ? store[a].push(b) : store[a] = [b];
    }
    
    while (q.size && idx < 1e3) {
        let r = [];
        
        for (const v of [...q]) {
            if (idx % k !== v % k) {
                if (v === nodes) {
                    return idx;
                }
                
                r = r.concat(store[v] || []);
            }
        }
        q = new Set(r);
        ++idx;
    }
    return -1;
}
