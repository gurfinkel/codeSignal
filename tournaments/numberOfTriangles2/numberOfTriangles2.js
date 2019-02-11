function numberOfTriangles2(sticks) {
    const n = sticks.length;
    let result = 0;

    sticks.sort((a, b) => b - a);

    for (let i = 0; n > i; ++i) {
        for (let j = i + 1; n > j; ++j) {
            for (let k = j + 1; n > k; ++k) {
                if (sticks[i] < sticks[j] + sticks[k]){
                    ++result;
                }
            }
        }
    }

    return result;
}
