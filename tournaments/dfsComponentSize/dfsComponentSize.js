function dfsComponentSize(matrix, vertex) {

    var dfs = function(currentVertex, visited) {
        visited[currentVertex] = true;
        componentSize++;
        
        for (var nextVertex = 0; nextVertex < matrix.length; nextVertex++) {
            if (matrix[currentVertex][nextVertex] && !visited[nextVertex]) {
                dfs(nextVertex, visited);
            }
        }
    }
  
    var visited = [],
        componentSize = 0;
  
    for (var i = 0; i < matrix.length; i++) {
        visited.push(false);
    }
  
    dfs(vertex, visited);
  
    return componentSize;
}
    