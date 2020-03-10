int[][] game2048(int[][] grid, string path) {
    for (int i = 0; i < path.Length; i++)
    {
        switch (path[i])
        {
            case 'D': Down(grid); break;
            case 'U': Up(grid); break;
            case 'L': Left(grid); break;
            case 'R': Right(grid); break;
        }
    }
    return grid;
}

static void Down(int[][] grid)
{
    var result = new int[grid.Length][];
    for (int i = 0; i < grid[0].Length; i++)
    {
        result[i] = MoveCells(grid.Select(x => x[i]).ToArray());
    }

    for (int i = 0; i < result.Length; i++)
    {
        for (int j = 0; j < result[i].Length; j++)
        {
            grid[i][j] = result[j][i];
        }
    }
}

static void Up(int[][] grid)
{
    var result = new int[grid.Length][];
    for (int i = 0; i < grid[0].Length; i++)
    {
        result[i] = MoveCells(grid.Select(x => x[i]).Reverse().ToArray()).Reverse().ToArray();
    }

    for (int i = 0; i < result.Length; i++)
    {
        for (int j = 0; j < result[i].Length; j++)
        {
            grid[i][j] = result[j][i];
        }
    }
}

static void Left(int[][] grid)
{
    for (int i = 0; i < grid.Length; i++)
    {
        grid[i] = MoveCells(grid[i].Reverse().ToArray()).Reverse().ToArray();
    }
}

static void Right(int[][] grid)
{
    for (int i = 0; i < grid.Length; i++)
    {
        grid[i] = MoveCells(grid[i]);
    }
}

static int[] MoveCells(int[] line)
{
    var changed = new bool[line.Length];
    for (var i = line.Length - 2; i >= 0; i--)
    {
        if (line[i] == 0) continue;
        var temp = line[i];
        line[i] = 0;
        for (var j = i + 1; j < line.Length; j++)
        {
            if (line[j] != 0)
            {
                if (line[j] == temp && changed[j] == false)
                {
                    line[j] *= 2;
                    changed[j] = true;
                }
                else line[j - 1] = temp;
                break;
            }

            if (j == line.Length - 1 && line[j] == 0) line[line.Length - 1] = temp;
        }
    }

    return line;
}
