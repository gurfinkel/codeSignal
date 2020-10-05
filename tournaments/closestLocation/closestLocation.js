function closestLocation(address, objects, names) {
    var minDist = 1e9, // set the initial value
        a = address.toLowerCase(),
        l = address.length,
        dist, x1, y1, x2, y2, target,
        n,
        i, j;
    for (i in names) {
        n = names[i].toLowerCase();
        // ignore the similar chars from the beginning
        for (j = 0; j < a.length && a[j] == n[j]; j++) ;
        // check differ by one, missed one or extra one are match or not
        if (a.slice(j+1, l) == n.slice(j+1, l) ||
            a.slice(j, l) == n.slice(j+1, l + 1) ||
            a.slice(j+1, l) == n.slice(j, l - 1)
        ) {
            [x1, y1, x2, y2] = objects[i];
            // calculate the nearest point if it's a street
            if (x2 !== undefined) {
                x1 = x1 * x2 < 0 ? 0 : Math.min(Math.abs(x1), Math.abs(x2));
                y1 = y1 * y2 < 0 ? 0 : Math.min(Math.abs(y1), Math.abs(y2));
            }
            // calculate the distance
            dist = x1 ** 2 + y1 ** 2;
            if (dist < minDist) {
                minDist = dist;
                target = names[i];
            }
        }
    }
    return target;
}
