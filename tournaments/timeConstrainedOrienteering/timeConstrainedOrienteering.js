function timeConstrainedOrienteering(n, start, roads) {
    a = []
    for ([x, y, d] of roads)
        a[x] = [...(a[x] || []), [d, y]],
            a[y] = [...(a[y] || []), [d, x]]
    
    q = [[start]]
    m = -1
    n = 0
    for (i = 0; i < q.length; i++)
        if (v = q[i])
            for (x of v)
                if (w = a[x]) {
                    if (m < i)
                        m = i,
                            n++
                    for ([d, y] of w)
                        if (a[y])
                            q[d = d < i ? i : d] ? q[d].push(y) : q[d] = [y]
                    a[x] = 0
                }
    return n;
}
