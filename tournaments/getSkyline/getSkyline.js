function getSkyline(buildings) {
    /* This algorithm build a linked list to store the current skyline structure
     * and compare with the next element.
     * The new buildings not compared with all of the previous processed.
     * The comparision starts from first visible building part, where
     *   visible_part.right > new building.x
     *
     * It's enough fast for large list.
     * Bechmark:
     *    on cf environment: with 1 million items:  414ms
     *    on local machine:  with 1 million items:  240ms
     *                       with 5 million items: 1467ms
     *
     * buildings = [];
     * for (i = 0; i < 1000000; i++)
     *     buildings[i] = [i, Math.random() * 1e6 + 1 | 0, Math.random() * 1e6 + 1 | 0]
     * console.log(buildings);
     * console.time("time");
     * console.log(getSkyline(buildings));
     * console.timeEnd("time");
     */
    list = {l: -1, r: 1e9, h:0, n: null, p: null}
    curr = list;

    for (i in buildings) {
        [l, w, h] = buildings[i];
        node = {l: l, r: l + w, h:h, n: null, p: null}
        while (curr.n && curr.n.r < l)
            curr = curr.n;
        last = curr;
        while (node) {
            if (last.r < node.l || (last.r == node.l && last.h != node.h)) {
                //      -----            -----
                // -----N   N      ----- +---+
                // L   L+---+  or  L   L +---+
                // L   LN   N      L   L N   N
                last = last.n
            } else if (last.l > node.r || (last.l == node.r && last.h != node.h)) {
                //      -----            -----
                // -----L   L      ----- +---+
                // N   N+---+  or  N   N +---+
                // N   NL   L      N   N L   L
                last.p.n = node
                node.p = last.p
                node.n = last
                last.p = node
                node = false
            } else if (last.l <= node.l && last.r >= node.r && last.h >= node.h) {
                // ----=====----      -=====----      -=====-      ----=====-
                // L   +---+   L  or  L+---+   L  or  L+---+L  or  L   +---+L
                // L   N   N   L      LN   N   L      LN   NL      L   N   NL
                node = false;
            } else if (last.l >= node.l && last.r <= node.r && last.h <= node.h) {
                // ----=====----      -=====----      -=====-      ----=====-
                // N   +---+   N  or  N+---+   N  or  N+---+N  or  N   +---+N
                // N   L   L   N      NL   L   N      NL   LN      N   L   LN
                last.p.n = last.n
                last.n.p = last.p
                last = last.n
            } else if (last.h == node.h) {
                // ----=====----      ----=====----
                // N   L   N   L  or  L   N   L   N
                // N   L   N   L      L   N   L   N
                if (last.l < node.l) node.l = last.l
                if (last.r > node.r) node.r = last.l
                last.p.n = last.n
                last.n.p = last.p
                last = last.n
            } else if (last.h < node.h) {
                if (last.l < node.l && last.r > node.r) {
                    //     -----
                    // ----N   N----
                    // L   N   N   L
                    tmp = {l: node.r, r: last.r, h:last.h, n: last.n, p: node}
                    last.r = node.l
                    last.n ? last.n.p = tmp : 0
                    last.n = node
                    node.n = tmp
                    node.p = last
                    node   = false
                } else if (last.l < node.l) {
                    //     ---------        ------
                    // ----N----   N    ----N----N
                    // L   N   L   N or L   N   LN
                    last.r = node.l
                    last = last.n
                } else {
                    // ------          ---------
                    // N----N----  or  N   ----N----
                    // NL   N   L      N   L   N   N
                    last.p.n = node
                    node.p = last.p
                    node.n = last
                    last.p = node
                    last.l = node.r
                    node = false;
                }
            } else {
                if (last.l > node.l && last.r < node.r) {
                    //     -----
                    // ----L   L----
                    // N   L   L   N
                    tmp = {l: node.l, r: last.l, h:node.h, n:last, p:last.p}
                    last.p.n = tmp
                    last.p = tmp
                    node.l = last.r
                } else if (last.l <= node.l) {
                    // ------          ---------
                    // L----L----  or  L   ----L----
                    // LN   L   N      L   N   L   N
                    node.l = last.r
                } else {
                    //     ---------        ------
                    // ----L----   L    ----L----N
                    // N   L   N   L or N   L   NN
                    last.p.n = node
                    node.p = last.p
                    node.n = last
                    last.p = node
                    node.r = last.l
                    node = false;
                }

            }
        }
    }
    tmp = list
    ret = []
    r = 1e9
    while (tmp) {
        if (tmp.l > r)
            ret.push([r, 0])
        if (tmp.l >= 0)
            ret.push([tmp.l, tmp.h])
        r = tmp.r
        tmp = tmp.n
    }
    return ret
}
