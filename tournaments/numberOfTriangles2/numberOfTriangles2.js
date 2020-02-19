function numberOfTriangles2(sticks) {
    let result = 0;

    sticks.sort((a, b) => b - a);

    for (let i = 0; i in sticks; ++i) {
        for (let j = i + 1; j in sticks; ++j) {
            for (let k = j + 1; k in sticks; ++k) {
                if (sticks[i] < sticks[j] + sticks[k]) {
                    ++result;
                }
            }
        }
    }

    return result;
}
