function campusCup(emails) {
    var domains = {},
        spaces  = [],
        i, cnt
    
    for (i of emails) {
        domains[i.match(/@.*/)] |= 0;
        domains[i.match(/@.*/)]++;
    }
    
    for (i in domains) {
        cnt = domains[i]
        spaces.push([i, (cnt > 4) + (cnt > 9) + (cnt > 14) + (cnt > 24)]);
    }
    
    return spaces.sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : a[0] > b[0]))
        .map(a => a[0].slice(1));
}
