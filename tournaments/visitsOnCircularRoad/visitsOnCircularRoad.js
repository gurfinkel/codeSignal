function visitsOnCircularRoad(n, visitsOrder) {
    let result = 0;
    let a = 1;

    for (const item of visitsOrder) {
        result += Math.min(Math.abs(item - a), n - Math.abs(item - a));
        a = item;
    }

    return result;
}
