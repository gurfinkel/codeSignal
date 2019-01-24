def spiralNumbers(n):
    
    directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    currentDirectionIndex = 0
    currentRow = 0
    currentColumn = 0
    currentNum = 1

    m = []
    for i in range(n):
        m.append([])
        for j in range(n):
            m[i].append(0)

    for i in range( n * n, 0, -1):
        m[currentRow][currentColumn] = currentNum
        currentNum += 1
        if i > 1:
            # Determine the next cell
            while True:
                tmpRow = currentRow + directions[currentDirectionIndex][0]
                tmpColumn = currentColumn + \
                            directions[currentDirectionIndex][1]
                if (tmpRow < 0 or tmpRow >= n or
                    tmpColumn < 0 or tmpColumn >= n or
                    m[tmpRow][tmpColumn]):
                    currentDirectionIndex = (currentDirectionIndex + 1) % 4
                else:
                    currentRow = tmpRow
                    currentColumn = tmpColumn
                    break
    return m
