function treeDiameter(n, tree) {
    f = (x, y) => {
        p = a[y].p
        if (p > -1) {
            f(y, p)
            a[p].c.splice(a[p].c.indexOf(y), 1)
            a[y].c.push(p)
        }
        a[y].p = x
        a[x].c.push(y)
    }
    a = []
    for ([x, y] of tree) {
        if (!a[x]) [x, y] = [y, x]
        if (a[y]) {
            f(x, y)
        } else {
            a[x]
                ? a[x].c.push(y)
                : a[x] = {p: -1, c: [y]}
            a[y] = {p: x, c: []}
        }
    }
    
    f = i => {
        if (i > -1) {
            [x, y] = a[i].c.map(v => f(v)).sort((a, b) => b - a)
            if (~~x + ~~y > m) m = ~~x + ~~y
            return ~~x + 1
        }
    }
    m = 0
    
    if (n) f(a.findIndex(v => v.p == -1))
    
    return m
}
