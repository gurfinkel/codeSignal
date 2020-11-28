function dailyOHLC(timestamp, instrument, side, price, size) {
    a = []
    d = {}
    for (i = 0; i < timestamp.length; i++) {
        t = new Date(timestamp[i] * 1000).toISOString().slice(0, 10)
        s = instrument[i]
        p = price[i];
        [t, s, o, h, l, c] = d[t + s] || a.push(t + s) && [t, s, p, p, p, p]
        d[t + s] = [t, s, o, h < p ? p : h, l > p ? p : l, p]
    }
    return a.sort().map(v => d[v].map((v, i) => i < 2 ? v : v.toFixed(2)))
}
