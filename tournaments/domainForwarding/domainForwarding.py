def domainForwarding(redirects):
    def find(curNode):
        for red in redirects:
            if red[0] == curNode:
                return redirects.index(red)
        return -1

    def find2(string):
        if string in lexSorted:
            return lexSorted.index(string)

    nonEndNodes = []
    for red in redirects:
        nonEndNodes.append(red[0])

    end = []
    for red in redirects:
        curNode = red[1]
        x = find(curNode)
        while x != -1:
            curNode = redirects[x][1]
            x = find(curNode)
        end.append(curNode)

    # lex sort them
    lexSorted = []
    for item in end:
        if item not in lexSorted:
            lexSorted.append(item)
    lexSorted.sort(key=str.lower)

    lists = [[lexSorted[i]] for i in range(0,len(lexSorted))]

    # group them
    i = 0
    while i < len(end):
        x = find2(end[i])
        lists[x].append( redirects[i][0] )
        i += 1

    for lst in lists:
        lst.sort(key=str.lower)

    return lists
