function rodCutting(n, v) {
    a = [0]
    v.map((v, i) => {
        for (j = i; j <= n; j++)
            a[j] = Math.max(~~a[j], a[j-i]+ v)
    })
    return a[n]
}
