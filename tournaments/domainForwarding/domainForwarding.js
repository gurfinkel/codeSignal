function domainForwarding(redirects) {
    var a = [],
        i,
        from, to;
    for (i in redirects) {
        [from, to] = redirects[i];
        for (i = 0; i < a.length; i++)
            if (a[i][1].has(from)) {
                a[i][1].add(to);
                if (a[i][0] == from) a[i][0] = to;
                break;
            } else if (a[i][1].has(to)) {
                a[i][1].add(from)
                break;
            }
        if (!a[i])
            a.push([to, new Set([from, to])])
    }
    return a.sort().map(a => [...a[1]].sort());
}
