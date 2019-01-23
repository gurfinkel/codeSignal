int graphEdges(bool[][] matrix) {
    var result = 0;
    
    for (int i = 1; matrix.Length > i; ++i) {
        for (int j = 0; i > j; ++j) {
            if (matrix[i][j]) {
                ++result;
            }
        }
    }
    
    return result;
}
