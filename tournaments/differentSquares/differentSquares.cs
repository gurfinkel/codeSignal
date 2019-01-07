int differentSquares(int[][] matrix) {
    var store = new HashSet<int>();
    var rows = matrix.Length;
    var cols = matrix[0].Length;
    var result = 0;
    
    if (1 == rows || 1 == cols) {
        return result;
    }
    
    for (int i = 1; rows > i; ++i) {
        for (int j = 1; cols > j; ++j) {
            var temp = matrix[i - 1][j - 1] * 1000;
            temp += matrix[i - 1][j] * 100;
            temp += matrix[i][j - 1] * 10;
            temp += matrix[i][j];
            
            if (!store.Contains(temp)) {
                store.Add(temp);
                ++result;
            }
        }
    }
    
    return result;
}