int crossingSum(int[][] matrix, int a, int b) {
    var rows = matrix.Length;
    var cols = matrix[0].Length;
    var result = 0;
    
    for (int i = 0; cols > i; ++i) {
        result += matrix[a][i];
    }
    
    for (int i = 0; rows > i; ++i) {
        if (i != a) {
            result += matrix[i][b];
        }
    }
    
    return result;
}
