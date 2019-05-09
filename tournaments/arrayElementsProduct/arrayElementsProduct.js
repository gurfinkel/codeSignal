function arrayElementsProduct(inputArray) {
    return inputArray.reduce((t, item) => t *= item, 1);
}
