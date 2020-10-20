function opponentMatching(xp) {
    var arr = [];
    
    xp = xp.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
    while (xp.length > 1) {
        var mindiff = 1e9,
            pos = 0;
        for (var i = 1; i < xp.length; i++) {
            var diff = xp[i][0] - xp[i-1][0];
            if (diff < mindiff) {
                mindiff = diff;
                pos     = i;
            }
        }
        var a = xp[pos][1],
            b = xp[pos - 1][1];
        arr.push(a < b ? [a, b] : [b, a]);
        xp.splice(pos - 1, 2);
    }
    return arr;
}
