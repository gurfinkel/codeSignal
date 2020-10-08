bool[] delivery(int[] order, int[][] shoppers) {
    var n = shoppers.Length;
    var result = new bool[n];
    var d = order[0];
    var r = order[1];
    var l = order[2];

    for (var i = 0; shoppers.Length > i; ++i) {
        var item = shoppers[i];
        var time = 1D * (item[0] + d) / item[1] + item[2];

        if (time >= r && time <= r + l) {
            result[i] = true;
        }
    }

    return result;
}
