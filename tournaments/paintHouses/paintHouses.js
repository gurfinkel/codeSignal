function paintHouses(cost) {
    let [r, b, g] = [0, 0, 0];

    for (const [R, B, G] of cost) {
        [r, b, g] = [R + Math.min(b, g), B + Math.min(r, g), G + Math.min(r, b)];
    }

    return Math.min(r, b, g);
}

function paintHousesDp(cost) {
    const minCost = [[0, 0, 0]];

    for (const house of cost) {
        const next = [];

        for (let i = 0; 3 > i; ++i) {
            const prevRow = minCost[minCost.length - 1];
            let best = Infinity;

            for (let j = 0; 3 > j; ++j) {
                if (i !== j && prevRow[j] < best) {
                    best = prevRow[j];
                }
            }

            next[i] = house[i] + best;
        }

        minCost.push(next);
    }

    return Math.min(...minCost[minCost.length - 1]);
}

function paintHousesRecursive(cost) {
    return Math.min(minCost(0, 0), minCost(0, 1), minCost(0, 2));

    function minCost(i, j) {
        if (cost.length - 1 === i) {
            return cost[i][j];
        }

        let best = Infinity;

        for (let next = 0; 3 > next; ++next) {
            if (j !== next) {
                best = Math.min(best, minCost(i + 1, next));
            }
        }

        return cost[i][j] + best;
    }
}

function paintHousesGreedy(cost) {
    let total = 0;
    let last = -1;

    for (const house of cost) {
        let best = 1e5;
        let index = -1;

        for (let i = 0; 3 > i; ++i) {
            if (i !== last && house[i] < best) {
                index = i;
                best = house[i];
            }
        }

        last = index;
        total += best;
    }

    return total;
}
