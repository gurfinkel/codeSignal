function orienteeringGame(board) {
    M = 1e9
    a = []
    for (r of board) {
        a.push(M)
        l = 1
        for (v of r)
            a.push(v),
                l++
    }
    b = [...a].fill(M)
    b[1] = a[1]
    
    for (i = 2; i in a; ) {
        m = a[i] + Math.min(...[i - l, i - 1, i + 1, i + l].map(i => b[i] || M))
        if (m < b[i]) b[i] = m
        b[i - l] > a[i - l] + m
            ? i -= l
            : b[i - 1] > a[i - 1] + m
            ? i--
            : i++
    }
    return b.pop() - a.pop()
}
