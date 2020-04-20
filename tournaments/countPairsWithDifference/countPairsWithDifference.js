function countPairsWithDifference(k, a) {
    const mod = (1e9 + 7);
    const map = {};
    let result = 0;

    for (const item of a) {
        if (map[k + item]) {
            result = (result + map[k + item]) % mod;
        }

        if (map[item - k]) {
            result = (result + map[item - k]) % mod;
        }

        map[item] = (map[item] ? map[item] + 1 : 1);
    }

    return result;
}
