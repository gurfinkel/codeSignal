function bfsDistancesUnweightedGraph(matrix, startVertex) {
    const queue = [startVertex];
    const result = Array(matrix.length).fill(-1);
    
    result[startVertex] = 0;
    
    while (queue.length) {
        const current = queue.shift();
        
        for (let nextVertex = 0; nextVertex in matrix; ++nextVertex) {
            if (!~result[nextVertex] && matrix[current][nextVertex]) {
                queue.unshift(nextVertex);
                result[nextVertex] = 1 + result[current];
            }
        }
    }
    
    return result;
}
