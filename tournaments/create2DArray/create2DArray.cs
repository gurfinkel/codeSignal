int[][] create2DArray(int[] lengths) {
    var n = lengths.Length;
    var result = new int[n][];
    
    for (var i = 0; n > i; ++i) {
        result[i] = new int[lengths[i]];
        for (int j = 0; lengths[i] > j; ++j) {
            result[i][j] = j;
        }
    }   
    
    return result;
}
