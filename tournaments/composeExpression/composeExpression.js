composeExpression = ([a, ...D], T) =>
    D.map(d => {
        r = []
        for (e of q)
            for (o of "*+- ")
                /\b0\d/.test(f = e + o.trim() + d) || r.push(f)
        q = r
    }, q = [a]) &&
    q.filter((e, i) => r[i] == T, r = eval(`[${q}]`))


/* faster, longer: * /
composeExpression = (D, T) => {
    ret = []
    f = (e, j, r, m, i, n) => {
        if (D[j])
            for (i = j + 1; D[i - 1]; i++) {
                if (+D[j] | i == j + 1) {
                    n = +D.slice(j, i)
                    j ? f(e + "+" + n, i, r + n, n) +
                        f(e + "-" + n, i, r - n, -n) +
                        f(e + "*" + n, i, r - m + m * n, m * n)
                      : f(e + n, i, r + n, n)
                }
            }
        else if (r == T)
            ret.push(e)
    }
    f("", 0, 0, 0)
    return ret.sort()
}
/**/
