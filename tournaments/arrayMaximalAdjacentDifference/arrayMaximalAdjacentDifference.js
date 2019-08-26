function arrayMaximalAdjacentDifference(inputArray) {
    let result = 0;

    for (let i = 1; inputArray.length > i; ++i) {
        result = Math.max( result, Math.abs(inputArray[i] - inputArray[i - 1]));
    }

    return result;
}
