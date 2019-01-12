def bfsDistancesUnweightedGraph(matrix, startVertex):
    from collections import deque

    frontier = deque([(startVertex, 0)])
    distances = [0]*(len(matrix))
    explored = set([startVertex])

    while frontier:
        current, depth= frontier.pop()
        distances[current] = depth
        for nei in range(len(matrix)):
            if matrix[current][nei] and nei not in explored:
                frontier.appendleft((nei, depth + 1))
                explored.add(nei)

    return distances
