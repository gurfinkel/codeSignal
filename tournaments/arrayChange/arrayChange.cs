int arrayChange(int[] inputArray) {
    var result = 0;

    for (var i = 1; inputArray.Length > i; ++i) {
        if (inputArray[i] <= inputArray[i - 1]) {
            result += (inputArray[i - 1] - inputArray[i] + 1);
            inputArray[i] = inputArray[i - 1] + 1;
        }
    }
        
    return result;
}
