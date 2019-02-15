def isTournament(n, fromV, toV):

    edges = []

    for i in range(n):
        line = []
        for j in range(n):
            line.append(False)
        edges.append(line)

    for i in range(len(fromV)):
        edges[ fromV[i] - 1 ][ toV[i] - 1 ] = True

    for i in range(n):
        for j in range(i + 1, n):
            if edges[i][j] == edges[j][i]:
                return False

    if len(fromV) != n * (n - 1) // 2:
        return False
    return True
