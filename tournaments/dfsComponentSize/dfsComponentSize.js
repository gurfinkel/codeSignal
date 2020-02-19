function dfsComponentSize(matrix, vertex) {
    const visited = Array(matrix.length).fill(0);
    let result = 0;

    const dfs = function(index) {
        visited[index] = 1;
        ++result;

        for (let i = 0; i in matrix; ++i) {
            if (matrix[index][i] && !visited[i]) {
                dfs(i);
            }
        }
    };

    dfs(vertex);

    return result;
}
