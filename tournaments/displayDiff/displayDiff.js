function displayDiff(oldVersion, newVersion) {
    var dp = [];
    f = (o, n) => {
        var i = 0, j, diff = "", r, x;
        if (!dp[o + " " + n]) {
            while (o[i] && o[i] == n[i]) {
                diff += o[i];
                i++;
            }
            r = []
            for (j = i; j++ < o.length; ) {
                x = f(o.slice(j), n.slice(i));
                r.push([diff + '\200' + o.slice(i, j) + '\201' + x[0], diff + o.slice(i, j) + x[1]]);
            }
            for (j = i; j++ < n.length; ) {
                x = f(o.slice(i), n.slice(j));
                r.push([diff + '\202' + n.slice(i, j) + '\203' + x[0], diff + n.slice(i, j) + x[1]]);
            }
            r.sort((a, b) => a[1].length < b[1].length
                ? -1
                : a[1].length > b[1].length
                    ? 1
                    : a[0] < b[0] ? -1 : a[0] > b[0]
            );
            dp[o + " " + n] = r[0] ? r[0] : [diff, diff];
        }
        return dp[o + " " + n];
    }
    return f(oldVersion, newVersion)[0]
        .replace(/\200/g, "(")
        .replace(/\201/g, ")")
        .replace(/\202/g, "[")
        .replace(/\203/g, "]");
}
