bool rowsRearranging(int[][] matrix) {
    bool isIncr = true;

    for (int i = 0; isIncr && i < matrix.Length - 1; i++)
        for (int k = i + 1; isIncr && k < matrix.Length; k++)
        {
            isIncr = matrix[i][0] != matrix[k][0];
            if(!isIncr) break;
            bool more = matrix[i][0] > matrix[k][0];
            for (int j = 1; isIncr && j < matrix[0].Length; j++)
            {
                isIncr = matrix[i][j] != matrix[k][j];
                if(!isIncr) break;
                if (matrix[i][j] > matrix[k][j] != more) isIncr = false;
            }

        }

    return isIncr;
}
