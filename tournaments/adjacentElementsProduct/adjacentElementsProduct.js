function adjacentElementsProduct(inputArray) {

    var best = inputArray[0] * inputArray[1],
        cur = best;

    for (var i = 1; i < inputArray.length - 1; i++) {
        cur = inputArray[i] * inputArray[i + 1];
        if (best < cur) {
            best = cur;
        }
    }

    return best;
}
    