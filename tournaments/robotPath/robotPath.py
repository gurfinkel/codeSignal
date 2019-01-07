def robotPath(instructions, bound):
    dx = [-1, 0, 1, 0]
    dy = [ 0, 1, 0, -1]
    directions = 'LURD'
    x = 0
    y = 0

    for i in range(len(instructions)):
        dirIndex = 0
        for j in range(1, 4):
            if instructions[i] == directions[j]:
                dirIndex = j
        if (abs(x + dx[dirIndex]) <= bound and abs(y + dy[dirIndex]) <= bound):
            x += dx[dirIndex]
            y += dy[dirIndex]

    return [x, y]
