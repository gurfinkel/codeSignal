int neighbouringElements(int[][] a) {
    int r=0;
    for (int i=0; i<a.Length-1; i++)
    for (int j=0; j<a[0].Length-1; j++)
    {
        if (a[i][j]==a[i][j+1])r++;
        if (a[i][j]==a[i+1][j])r++;
    }
    for (int i=0; i<a.Length-1; i++)
        if (a[i][a[0].Length-1]==a[i+1][a[0].Length-1])r++;
    for (int j=0; j<a[0].Length-1; j++)
        if (a[a.Length-1][j]==a[a.Length-1][j+1])r++;
    return r;
}
