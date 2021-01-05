function electricField(grid, wires) {
    const [h, w] = [...grid];

    a = Buffer.alloc(s = w * h)
    s--
    wires.push([0,0,0,h],[0,0,w,0],[0,h,w,h],[w,0,w,h])

    f = ([x1, y1, x2, y2]) => {
        if (x1 > x2 || y1 > y2)
            [y1,y2,x1,x2] = [y2,y1,x2,x1]
        for (i = y1 ; i != y2; i++)
            a[i * w + x1] |= 1,
                a[i * w + x1 - 1] |= 2
        for (i = x1; i != x2; i++)
            a[y1 * w + i] |= 4,
                a[y1 * w + i - w] |= 8
    }

    for (b of wires)
        f(b)
    q = [0]
    n = 0
    while (0 in q) {
        r = []
        for (p of q) {
            if (p == s)
                return n
            v = p in a ? a[p] : 15
            a[p] = 15
            v & 1 ? 0 : r.push(p - 1)
            v & 2 ? 0 : r.push(p + 1)
            v & 4 ? 0 : r.push(p - w)
            v & 8 ? 0 : r.push(p + w)
        }
        n++
        q = r
    }
    return -1;
}
