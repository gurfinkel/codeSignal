function arrayMaximalDifference(inputArray) {
    inputArray.sort((a, b) => a - b);

    return inputArray[inputArray.length - 1] - inputArray[0];
}
