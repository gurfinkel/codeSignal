function isPermutation(n, inputArray) {
    return inputArray.sort((a, b) => a - b).join('') === Array.from(Array(1 + n).keys()).splice(1).join('');
}
