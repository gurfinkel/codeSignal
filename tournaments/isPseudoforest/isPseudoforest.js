function isPseudoforest(n, wmap) {
    d = []
    t = []
    r = 0
    n = 1
    for([a,b] of wmap) {
        d[a] = d[a] || []
        d[a].push(b)
        n = Math.min(n,a)
    }
    s = [n]
    while(s.length) {
        for(i of d[s.pop()]||[]){
            if(t[i]) {
                if(++r>1)return false
            }
            else {
                s.push(i)
                t[i]=1
            }
        }
    }
    return true
}
