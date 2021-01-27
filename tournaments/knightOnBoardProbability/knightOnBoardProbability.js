function knightOnBoardProbability(n, m, steps, x, y) {
    let result = 1;
    let store = {};

    store['' + x + y] = 1;

    while (steps--) {
        const b = {};

        result = 0;

        for (let [k, v] of Object.entries(store)) {
            const i = +k[0];
            const j = +k[1];

            for (const I of [-2, -1, 1, 2]) {
                for (const J of [2 / I | 0, -2 / I | 0]) {
                    const newX = i + I;
                    const newY = j + J;

                    k = '' + newX + newY;

                    if (0 <= newX && 0 <= newY && n > newX && m > newY) {
                        const t = v / 8;
                        b[k] = (b[k] || 0) + t;
                        result += t;
                    }
                }
            }
        }

        store = b;
    }

    return result;
}
