def bfsDistancesUnweightedGraph(matrix, startVertex):
    from collections import deque

    n = len(matrix)
    queue = deque([startVertex])
    result = [-1] * n
    result[startVertex] = 0

    while queue:
        current = queue.pop()

        for nextVertex in range(n):
            if -1 == result[nextVertex] and matrix[current][nextVertex]:
                queue.appendleft(nextVertex)
                result[nextVertex] = 1 + result[current]

    return result
