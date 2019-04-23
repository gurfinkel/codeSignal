function maximalEven(inputArray) {
    return inputArray.reduce((a, item) => (item & 1) ? a : Math.max(a, item), Number.MIN_SAFE_INTEGER);
}
