function pipesGame(state) {
    h    = state.length;
    w    = state[0].length;
    pool = [];
    used = new Set();
    err  = 0;
    sum  = 0;
    f = (y, x, s, d) => { // x, y, source, direction
        var k = "lu dr".indexOf(d);
//        console.log(y, x, s, d)
        y += 2 / (k - 2) / 2 | 0;
        x += (k - 2) / 2 | 0;
//        console.log(y, x, state[y] && state[y][x])
        if (!state[y] || state[y][x] == null) return false;
        if (state[y][x] == s.toUpperCase()) return true;
//        console.log(d)
        var p = ({l:"2367", u:"1347", d:"1567", r:"2457"})[d].indexOf(state[y][x]);
        if (p == -1) return false;
        d = {l:"ldul", u:"urlu", d:"dlrd", r:"rdur"}[d][p];
//        console.log([y, x, s, d]);
        return [y, x, s, d];
    }
    g = next => {
        var m = 0;
        tmp.push(next);
        key = next[0] + "-" + next[1];
//        if (used.has(key)) console.log(next, used);
        m += used.has(key);
        used.add(key)
        return m;
    }
    
    while (pool.length || sum == 0) {
        err = 0;
        minus = 0;
        tmp = [];
        if (pool.length) {
            for (i of pool) {
                next = f(...i);
                if (next) {
                    if (next !== true)
                        minus += g(next);
                } else {
                    err++;
                }
            }
        } else {
            for (i in state)
                for (j in state[i])
                    if (state[i][j].match(/[a-z]/))
                        [..."udlr"].map(k => {
                            next = f(+i, +j, state[i][j], k);
                            if (next !== false && next !== true)
                                minus += g(next);
                        });
            err = tmp.length == 0;
        }
        if (err) break;
        pool = tmp;
        sum += pool.length - minus;
//        console.log(sum, minus, pool);
    
    }
    return err ? -sum : sum;
}
