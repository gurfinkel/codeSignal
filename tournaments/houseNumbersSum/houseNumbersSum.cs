int houseNumbersSum(int[] inputArray) {
    var result = 0;
    var index = 0;

    while (inputArray.Length > index && 0 != inputArray[index]) {
        result += inputArray[index++];
    }

    return result;
}
