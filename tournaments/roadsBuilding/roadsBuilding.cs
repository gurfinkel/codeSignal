int[][] roadsBuilding(int cities, int[][] roads) {
    var result = new List<int[]>();
    var n = roads.Length;
    var store = new int[cities][];

    for (int i = 0; cities > i; ++i) {
        store[i] = new int[cities];
    }

    for (int i = 0; n > i; ++i) {
        ++store[roads[i][1]][roads[i][0]];
        ++store[roads[i][0]][roads[i][1]];
    }

    for (int i = 0; cities - 1 > i; ++i) {
        for (int j = i + 1; cities > j; ++j) {
            if (0 == store[i][j]) {
                result.Add(new int[] {i, j});
            }
        }
    }

    result.Sort((a, b) => {if (a[0] > b[0]) return 1; else if (a[0] < b[0]) return -1; else { if (a[1] > b[1]) return 1; else if (a[1] < b[1]) return -1; else return 0; }});

    return result.ToArray();
}
