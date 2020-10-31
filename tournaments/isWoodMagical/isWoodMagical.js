function isWoodMagical(n, wmap) {
    a = []
    for ([x, y] of wmap) {
        if (x == y)
            return false
        if (a[x]) {
            if (a[y]) {
                if (a[x].r == a[y].r) {
                    if ((a[x].l - a[y].l) % 2 == 0) {
                        return false
                    }
                } else {
                    a[x].c.push(y)
                    a[y].c.push(x)
                    r = a[x].r
                    q = [[y, x, a[x].l + 1]]
                    for ([y, x, l] of q) {
                        a[y].r = r
                        a[y].l = l
                        for (v of a[y].c)
                            if (a[v].r != r)
                                q.push([v, y, l + 1])
                    }
                }
            } else {
                a[y] = {r: a[x].r, p: x, l:a[x].l + 1, c:[x]}
                a[x].c.push(y)
            }
        } else if (a[y]) {
            a[x] = {r: a[y].r, p: y, l: a[y].l + 1, c:[y]}
            a[y].c.push(x)
        } else {
            a[x] = {r: x, l: 1, c:[y]}
            a[y] = {r: x, l: 2, c:[x]}
        }
    }
    return true
}
