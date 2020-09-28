bool efficientRoadNetwork(int n, int[][] roads) {
    var store = new int[n][];

    for (int i = 0; n > i; ++i) {
        store[i] = new int[n];
    }

    foreach (var item in roads) {
        ++store[item[1]][item[0]];
        ++store[item[0]][item[1]];
    }

    for (int i = 0; n - 1 > i; ++i) {
        for (int j = i + 1; n > j; ++j) {
            if (0 == store[i][j]) {
                var flag = false;
                for (int k = 0; n > k; ++k) {
                    if (i != k && 0 < store[i][k]) {
                        if (0 < store[k][j]) {
                            flag = true;
                        }
                    }
                }

                if (!flag) {
                    return false;
                }
            }
        }
    }

    return true;
}
