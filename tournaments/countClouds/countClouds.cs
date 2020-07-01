int countClouds(char[][] skyMap) {
    if (null == skyMap || 0 == skyMap.Length) {
        return 0;
    }

    var connectedComponentsCount = 0;
    var rows = skyMap.Length;
    var cols = skyMap[0].Length;
    var dsu = new Dsu(1 + rows * cols);

    for (var row = 0; rows > row; ++row) {
        for (var col = 0; cols > col; ++col) {
            if ('1' == skyMap[row][col]) {
                if (rows > 1 + row && '1' == skyMap[1 + row][col]) {
                    dsu.union(cols * (1 + row) + col, cols * row + col);
                }
                if (cols > 1 + col && '1' == skyMap[row][1 + col]) {
                    dsu.union(cols * row + col + 1, cols * row + col);
                }
            } else {
                dsu.union(cols * row + col, rows * cols);
            }
        }
    }

    for (var i = 0; rows * cols > i; ++i) {
        if (i == dsu.find(i)) {
            ++connectedComponentsCount;
        }
    }

    return connectedComponentsCount;
}

private class Dsu {
    private readonly int[] _parents;
    private readonly int[] _ranks;

    public Dsu(int n) {
        _parents = new int[n];
        _ranks = new int[n];

        for (var i = 0; n > i; ++i) {
            _parents[i] = i;
        }
    }

    public int find(int x) {
        if (_parents[x] != x) {
            _parents[x] = find(_parents[x]);
        }

        return _parents[x];
    }

    public void union(int x, int y) {
        var px = find(x);
        var py = find(y);

        if (px != py) {
            if (_ranks[px] > _ranks[py]) {
                _parents[py] = px;
                ++_ranks[px];
            } else {
                _parents[px] = py;
                ++_ranks[py];
            }
        }
    }
}
