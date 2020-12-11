function countAPI(calls) {
    var tree = {k: {}}
    for (i in calls) {
        node = tree;
        for (key of calls[i].split('/')) {
            if (!(key in node.k))
                node.k[key] = {c: 0, k: {}};
            node = node.k[key];
            node.c++;

        }
    }
    f = (node, level) => {
        var ret = [];
        for (var i in node.k) {
            if (level > 0)
                ret.push("--".repeat(level) + i + " ("+node.k[i].c+")");
            ret = ret.concat(f(node.k[i], level + 1));
        }
        return ret;
    }
    return f(tree, 0);
}
