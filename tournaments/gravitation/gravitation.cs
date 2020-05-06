int[] gravitation(string[] rows) {
    var n = rows.Length;
    var m = rows[0].Length;
    var result = new List<int>();
    var min = int.MaxValue;

    for (int i = 0; m > i; ++i) {
        var flag = false;
        var dots = 0;

        for (int j = 0; n > j; ++j) {
            if (!flag && '#' == rows[j][i]) {
                flag = true;
            }

            if (flag && '.' == rows[j][i]) {
                ++dots;
            }
        }

        if (min > dots) {
            min = dots;
            result.Clear();
            result.Add(i);
        } else if (min == dots) {
            result.Add(i);
        }
    }

    return result.ToArray();
}
