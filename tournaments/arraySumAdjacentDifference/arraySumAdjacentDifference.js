function arraySumAdjacentDifference(inputArray) {
    const n = inputArray.length;
    let result = 0;

    for (let i = 1; n > i; ++i) result += Math.abs(inputArray[i - 1]-inputArray[i]);

    return result;
}

