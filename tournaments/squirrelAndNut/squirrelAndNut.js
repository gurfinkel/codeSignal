function squirrelAndNut(tree, triples) {
    // basic idea:
    // create a[] array from tree, where index is the node, value is the parent
    // result:
    //    1. get all parents of x
    //    2. get all parents of y until there is common parent with x
    //    3. cut off the parents of the common parent
    //    4. return if remain values includes z
    const a = [];
    for (let i = 0; i in tree; ) {
        const p = tree[i++];
        const c = tree[i++];
        a[p] = a[p] || 0;
        a[c] = p;
    }
    const f = (x, b) => x ? b.includes(x) ? b.slice(0, b.indexOf(x) + 1) : [x, ...f(a[x], b)] : [];
    return triples.map(([x, y, z]) => f(y, f(x, [])).includes(z));
}
