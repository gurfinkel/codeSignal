function proCategorization(pros, preferences) {
    var cat = {},
        i, p,
        ret = [];
    for (i in pros)
        for (p of preferences[i])
            if (cat[p]) {
                cat[p].push(pros[i]);
            } else {
                cat[p] = [pros[i]];
            }
    for (i in cat)
        ret.push([[i], cat[i].sort()]);
    return ret.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0]);
}
