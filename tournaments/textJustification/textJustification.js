function textJustification(words, L) {
    // split the whole text into max. L length lines, break at the spaces
    var ret = [];
    (words.join` ` + " ").replace(RegExp(`(.{0,${L}}) `, "g"), (a, l) => {
        var j;
        if (l.match(/ /)) {
            // multiply words in the line add spaces to the beginning of the
            // words while line length < L
            j = 1
            while (l.length < L) {
                if (l[j] != " " && l[j - 1] == " ")
                    l = l.substr(0, j) + " " + l.slice(j++)
                l[++j] || (j = 1)
            }
        } else {
            // one word in the line. fill with spaces
            l += " ".repeat(L - l.length)
        }
        // store justified line
        ret.push(l)
    })

    // last line switch back to left justify.
    l = ret.length - 1
    ret[l] = ret[l].replace(/ +/g, " ");
    ret[l] += " ".repeat(L - ret[l].length);

    // return justified text
    return ret
}
