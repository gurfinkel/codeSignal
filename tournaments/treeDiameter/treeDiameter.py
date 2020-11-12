def treeDiameter(n, tree):
    if not tree:
        return 0

    d = {}
    for t in tree:
        if t[0] not in d:
            d[t[0]] = []
        if t[1] not in d:
            d[t[1]] = []
        d[t[1]].append(t[0])
        d[t[0]].append(t[1])


    def search(n):
        s = set([n])
        stack = [(n,0)]
        r = (n,0)
        while stack:
            c,depth = stack.pop()
            if depth > r[1]:
                r = (c,depth)
            for x in d[c]:
                if x not in s:
                    stack.append((x,depth+1))
                s.add(x)
        return r

    longest = search(tree[0][0])

    return search(longest[0])[1]
