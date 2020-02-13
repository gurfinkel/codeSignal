function countClouds(skyMap) {
    const markVisited = function() {
        while (store.length) {
            const [i, j] = store.shift();
            skyMap[i][j] = 'X';

            if (i + 1 in skyMap && '1' === skyMap[i + 1][j]) {
                store.push([i + 1, j]);
            }

            if (i - 1 in skyMap && '1' === skyMap[i - 1][j]) {
                store.push([i-1, j]);
            }

            if (j + 1 in skyMap[0] && '1' === skyMap[i][j + 1]) {
                store.push([i, j + 1]);
            }

            if (j - 1 in skyMap[0] && '1' === skyMap[i][j - 1]) {
                store.push([i, j - 1]);
            }
        }
    };

    if (!skyMap || !skyMap.length) {
        return 0;
    }

    const store = [];
    let result = 0;

    for (let i = 0; i in skyMap; ++i) {
        for (let j = 0; j in skyMap[0]; ++j) {
            if ('1' === skyMap[i][j]) {
                ++result;
                store.push([i, j]);
                markVisited();
            }
        }
    }

    return result;
}
