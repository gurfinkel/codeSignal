typedef std::vector<std::vector<bool>> matrix_t;

int bfsDistancesUnweightedGraph2(matrix_t matrix,
                                 int vertex1,
                                 int vertex2) {

    bool visited[matrix.size()];
    std::fill_n(visited, matrix.size(), false);
    std::queue<int> q;
    std::vector<int> distance(matrix.size());

    visited[vertex1] = true;
    q.push(vertex1);
    while (q.size() > 0) {
        int currentVertex = q.front();
        q.pop();
        visited[currentVertex] = true;
        
        for (int nextVertex = 0; nextVertex < matrix.size(); ++nextVertex) {
            if (matrix[currentVertex][nextVertex] && !visited[nextVertex]) {
                visited[nextVertex] = true;
                distance[nextVertex] = distance[currentVertex] + 1;
                q.push(nextVertex);
            }
        }
    }

    return distance[vertex2];
}
