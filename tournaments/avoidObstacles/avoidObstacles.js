function avoidObstacles(inputArray) {
    const n = inputArray.length;

    for (let i = 1; ; ++i) {
        for (let j = 0; n > j; ++j) {
            if (!(inputArray[j] % i)) break;
            if (n - 1 === j) return i;
        }
    }
}
