int visitsOnCircularRoad(int n, int[] visitsOrder) {
    int current = 1,
        res = 0;
    for (var i = 0; i < visitsOrder.Length; i++) {
        res += Math.Min(Math.Abs(visitsOrder[i] - current),
                    n - Math.Abs(visitsOrder[i] - current));
        current = visitsOrder[i];
    }
    return res;
}
