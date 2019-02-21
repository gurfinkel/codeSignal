function lazyFriends(houses, maxDist) {
    const result = [];
    const n = houses.length;
    let a = 0;
    let b = 0;

    for (let i = 0; n > i; ++i) {
        while (n > b + 1 && houses[b + 1] - houses[i] <= maxDist) { ++b; }
        while (houses[i] - houses[a] > maxDist) { ++a; }

        result.push(b - a);
    }

    return result;
}
