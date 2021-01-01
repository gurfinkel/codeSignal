function timeConstrainedOrienteering2(n, roads) {
    a = []
    o = [...roads].map(v => [])
    i = [...roads].map(v => [])
    roads.map((r, i) => r.map((v, j) => v < 0 || a.push([v, i, j])))
    a.sort(([a], [b]) => a - b)
    r = roads.map(r => r.fill(-1))
    f = (v, s, e) => {
        if (r[s][e] > -1)
            return
        r[s][e] = v
        for (b of i[s])
            f(v, b, e)
        for (b of o[e])
            f(v, s, b)
        i[e].push(s)
        o[s].push(e)
    }
    for (z of a)
        f(...z)
    return r
}
