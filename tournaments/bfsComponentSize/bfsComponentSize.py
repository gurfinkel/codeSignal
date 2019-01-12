def bfsComponentSize(matrix):
    visited = [ False for i in range(len(matrix))]
    queue = []
    componentSize = 0

    visited[1] = True
    queue.append(1)
    while len(queue) > 0:
        currentVertex = queue.pop()
        visited[currentVertex] = True
        componentSize += 1
        for nextVertex in range(len(matrix)):
            if matrix[currentVertex][nextVertex] and not visited[nextVertex]:
                visited[nextVertex] = True
                queue.append(nextVertex)

    return componentSize
