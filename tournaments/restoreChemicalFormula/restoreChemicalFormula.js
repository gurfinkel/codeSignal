function restoreChemicalFormula(elements, formula) {
    const dfs = function(s, i, r, c) {
        if (c > minC) {
            return;
        }

        if (r.toUpperCase() === s & c < minC | c === minC & r < res) {
            res = r;
            return minC = c;
        }

        for (let k = 1; k <= 2; k++) {
            let str = s.slice(i, i + k);

            if(!hash[str]) {
                continue;
            }

            dfs(s, i + k, r + hash[str], c + 1);
        }
    }

    let res = '';
    let hash = {};
    let minC = Number.MAX_VALUE;

    elements.map(e => hash[e.toUpperCase()] = e);
    dfs(formula, 0, '', 0);

    return res;
}
