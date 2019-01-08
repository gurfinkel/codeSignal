bool isIdentityMatrix(int[][] matrix) {
    var rows = matrix.Length;
    var cols = matrix[0].Length;
    
    if (rows != cols) {
        return false;
    }
    
    for (int i = 0; rows > i; ++i) {
        for (int j = 0; cols > j; ++j) {
            if (i == j && 1 != matrix[i][j]) {
                return false;
            }
            if (i != j && 0 != matrix[i][j]) {
                return false;
            }
        }
    }
    
    return true;
}
