function bfsComponentSize(matrix) {

    var visited = [];
    var queue = [];
    var componentSize = 0;
  
    for (var i = 0; i < matrix.length; i++) {
        visited.push( false );
    }
  
    visited[1] = true;
    queue.push(1);
    while (queue.length) {
        var currentVertex = queue.shift();
        visited[currentVertex] = true;
        componentSize++;

        for (var nextVertex = 0; nextVertex < matrix.length; nextVertex++) {
            if (matrix[currentVertex][nextVertex] && !visited[nextVertex]) {
                visited[nextVertex] = true;
                queue.push(nextVertex);
            }
        }
    }
  
    return componentSize;
}
    