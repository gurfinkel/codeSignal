function numberMinimization(n, d) {
    p = (s) => {
        let r = []
        if (s.length < 2)
            return s
        for (let i=0; i < s.length; i++)
            for (y of p(s.slice(0,i) + s.slice(i+1)))
                r.push(s[i] + y)
        return r
    }

    b = [n]
    v = new Set()
    while (b.length && n > 1) {
        y = ""+b.pop()
        for (x of p(y)) {
            x = Number(x)
            if (!v.has(x)) {
                v.add(x)
                x < n ? n = x : 0
                x % d < 1 ? b.push(~~x/d) : 0
            }
        }
    }
    return n
}
