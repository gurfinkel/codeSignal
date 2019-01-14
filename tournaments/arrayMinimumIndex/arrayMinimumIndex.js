function arrayMinimumIndex(inputArray) {

    var indexOfMinimum = 0;
    for (var i = 1; i < inputArray.length; i++) {
        if (inputArray[i] < inputArray[indexOfMinimum]) {
            indexOfMinimum = i;
        }
    }
    return indexOfMinimum;
}
    