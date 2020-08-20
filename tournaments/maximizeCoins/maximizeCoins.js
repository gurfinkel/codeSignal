function maximizeCoins(coins) {
    a = []
    for ([x, y] of coins) {
        if (!a[x]) a[x] = []
        if (a[x][y]) a[x][y]++
        else a[x][y] = 1
    }

    b = []
    d = []
    f = []
    n = 0
    for (i in a) {
        b[n] = [];
        d[n] = [];
        f[n] = 0;
        for (j in a[i]) {
            b[n].push(+j);
            d[n].push(a[i][j]);
        }
        n++;
    }

    r = 0;
    e = [];

    for (i = 0; i < n; i++) {
        e[i] = [];
        g = f.slice();
        for (j = 0; j < b[i].length; j++) {
            J = b[i][j];

            for (t = k = 0; k <= i; g[k++] = l > 0 ? l - 1 : 0)
                for (l = g[k]; (L = b[k][l]) <= J; l++)
                    if ((E = e[k][L]) > t) t = E


            e[i][J] = t += d[i][j];

            if (r < t)
                r = t;
        }
    }

    return r;
}
