bool[][][] financialCrisis(bool[][] roadRegister) {
    var n = roadRegister.Length;
    var result = new List<bool[][]>();

    for (int i = 0; n > i; ++i) {
        var newItem = new bool[n - 1][];
        for (int j = 0; n > j; ++j) {
            if (i != j) {
                var newJ = i < j ? j - 1 : j;
                newItem[newJ] = new bool[n - 1];
                for (int k = 0; n > k; ++k) {
                    if (i != k) {
                        var newK = i < k ? k - 1 : k;
                        newItem[newJ][newK] = roadRegister[j][k];
                    }
                }
            }
        }

        result.Add(newItem);
    }

    return result.ToArray();
}
