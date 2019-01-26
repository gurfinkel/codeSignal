bool findPath(int[][] matrix) {
    int n=matrix.Length;
    int m= matrix[0].Length;
    int a=0; int b=0;
    for (int i=0; i<n; i++)
        for (int j=0; j<m; j++)
            if (matrix[i][j]==1){
                a=i;
                b=j;
            }
    for (int k=2;k<=m*n;k++)
    {
        if (a>0 && matrix[a-1][b]==k){a--;continue; }
        if (b>0 && matrix[a][b-1]==k){b--;continue; }
        if (a<n-1 && matrix[a+1][b]==k){a++;continue; }
        if (b<m-1 && matrix[a][b+1]==k){b++;continue; }
        return false;
    }
    return true;
}
