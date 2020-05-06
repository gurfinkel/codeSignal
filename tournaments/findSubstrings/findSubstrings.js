function findSubstrings(words, parts) {
    var list = [], r;

    parts.map(p =>
        list[r = p.length-1] ? list[r].push(p) : list[r] = [p]
    )
    list = list.reverse()
        .map(l => RegExp(l.join`|`))
        .filter(r => r);

    return words.map(w => {
        var i = 0;
        while (list[i] && w == (w = w.replace(list[i++], a => `[${a}]`)));
        return w;
    })
}
