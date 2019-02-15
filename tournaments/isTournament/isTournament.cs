bool isTournament(int n, int[] fromV, int[] toV) {
    var store = new int[n][];

    for (var i = 0; n > i; ++i) {
        store[i] = new int[n];

        for (var j = 0; fromV.Length > j; ++j) {
            if (fromV[j] - 1 == i) {
                store[i][toV[j] - 1] = 1;
            }
        }
    }

    for (var i = 0; n > i; ++i) {
        if (1 == store[i][i]) {
            return false;
        }

        for (var j = i + 1; n > j; ++j) {
            if (store[i][j] == store[j][i]) {
                return false;
            }
        }
    }

    return true;
}
