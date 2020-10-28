bool[][] greatRenaming(bool[][] roadRegister) {
    var n = roadRegister.Length;

    for (int i = 0; n > i; ++i) {
        var tempItem = roadRegister[i][n - 1];
        for (int j = 0; n > j; ++j) {
            var testItem = roadRegister[i][j];
            roadRegister[i][j] = tempItem;
            tempItem = testItem;
        }
    }

    var tempRow = roadRegister[n - 1];
    for (int i = 0; n > i; ++i) {
        var testRow = roadRegister[i];
        roadRegister[i] = tempRow;
        tempRow = testRow;
    }

    return roadRegister;
}
