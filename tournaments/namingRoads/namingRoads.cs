bool namingRoads(int[][] roads) {
    var n = roads.Length;
    var lastRoadName = -1;
    var store = new Dictionary<int, int[]>();

    foreach (var item in roads) {
        store.Add(item[2], new int[] {item[0], item[1]});
        lastRoadName = Math.Max(lastRoadName, item[2]);
    }

    for (int i = 0; lastRoadName > i; ++i) {
        if (store.ContainsKey(i) && store.ContainsKey(i + 1)) {
            if ((store[i][0] == store[i + 1][0]) ||
                (store[i][1] == store[i + 1][0]) ||
                (store[i][0] == store[i + 1][1]) ||
                (store[i][1] == store[i + 1][1])) {
                return false;
            }
        }
    }

    return true;
}
