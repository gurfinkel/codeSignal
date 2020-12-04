function burningTheWood(n, wmap, start, k) {
    a = []
    a[start] = k
    for (; k--; )
        wmap = wmap.filter(([i, j]) => !(a[i] > k ? a[j] > k ? 1 : a[j] = k : a[j] > k ? a[i] = k : 0))
    b = []
    a.map((v, i) => b.push(i));
    return b;
}
/* it is better. skip the empty rounds, but O(nk) in worst case * /
burningTheWood = (n, m, s, k) => {
    a = []
    x = a[s] = k
    for (; x && k--; )
        m = m.filter(([i, j]) => !(a[i] > k ? a[j] > k ? 1 : x = a[j] = k : a[j] > k ? x = a[i] = k : 0), x = 0)
    b = []
    a.map((v, i) => b.push(i))
    return b
}
/**/
