function visitsOnCircularRoad(n, visitsOrder) {

    var current = 1,
        res = 0;
    for (var i = 0; i < visitsOrder.length; i++) {
        res += Math.min(Math.abs(visitsOrder[i] - current),
                    n - Math.abs(visitsOrder[i] - current));
        current = visitsOrder[i];
    }
    return res;
}
    