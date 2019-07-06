function stringsCrossover(inputArray, result) {
    const n = inputArray.length;
    let r = 0;

    for (let i = 0; n > i; ++i) {
        for (let j = i + 1; n > j; ++j) {
            let a = 1;
            for (let k = 0; result.length > k; ++k) {
                if (result[k] !== inputArray[i][k] && result[k] !== inputArray[j][k]) {
                    a = 0;
                    break;
                }
            }
            if (a) ++r;
        }
    }

    return r;
}
