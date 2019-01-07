int[][] swapDiagonals(int[][] matrix) {
    var rows = matrix.Length;
    var cols = matrix[0].Length;
    
    for (int i = 0; (rows >> 1) > i; ++i) {
        var temp = matrix[i][i];
        matrix[i][i] = matrix[i][rows - 1 - i];
        matrix[i][rows - 1 - i] = temp;
        
        temp = matrix[rows - 1 - i][rows - 1 - i];
        matrix[rows - 1 - i][rows - 1 - i] = matrix[rows - 1 - i][i];
        matrix[rows - 1 - i][i] = temp;
    }
    
    return matrix;
}
