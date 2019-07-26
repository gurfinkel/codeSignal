function adjacentElementsProduct(inputArray) {
    let result = inputArray[0] * inputArray[1];

    for (let i = 1; inputArray.length - 1 > i; ++i)
        result = Math.max(result, inputArray[i] * inputArray[i + 1]);

    return result;
}
