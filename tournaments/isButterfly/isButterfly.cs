bool isButterfly(bool[][] adj) {
    int length = adj.Length;

    for (int i = 0; i < length; i++) {
        if (adj[i][i]) {
            return false;
        }
    }

    for (int i = 0; i < length; i++) {
        for (int j = i + 1; j < length; j++) {
            if (adj[i][j] != adj[j][i]) {
                return false;
            }
        }
    }

    var degreeList = new List<int>();
    for (int i = 0; i < length; i++) {
        degreeList.Add(adj[i].Count(v => v));
    }

    if (degreeList.Count(v => v == 4) != 1 || degreeList.Count(v => v == 2) != degreeList.Count - 1) {
        return false;
    }

    for (int i = 0; i < length; i++) {
        var neighboors = adj[i].Select((v, index) => index).Where(index => adj[i][index]);
        if (neighboors.Count() < 4) {
            continue;
        }

        var flag = true;
        foreach (int[] permutation in GetPermutations(neighboors)) {
            int a = permutation[0], b = permutation[1], c = permutation[2], d = permutation[3];
            if (adj[a][b] && adj[c][d] && !adj[a][c] && !adj[b][d]) {
                return true;
            }
        }
    }

    return false;
}

private bool NoRepetition(int[] arr, int v) {
    return arr.Count(i => i == v) == 1;
}

private IEnumerable<int[]> GetPermutations(IEnumerable<int> combinations) {
    var comb = combinations.ToArray();
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            for (int k = 0; k < 4; k++) {
                for (int l = 0; l < 4; l++)
                {
                    var arr = new[] { i, j, k, l };
                    bool flag = true;
                    foreach (int v in arr)
                        flag = flag && NoRepetition(arr, v);

                    if (!flag)
                        continue;

                    yield return arr.Select(v => comb[v]).ToArray();
                }
            }
        }
    }
}
