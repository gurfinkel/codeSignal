function arrayKthGreatest(inputArray, k) {

    for (var i = 0; i < k; i++) {
        var indexOfMaximum = i,
            tmp = inputArray[i];
    
        for (var j = i + 1; j < inputArray.length; j++) {
            if (inputArray[j] > inputArray[indexOfMaximum]) {
                indexOfMaximum = j;
            }
        }
    
        inputArray[i] = inputArray[indexOfMaximum];
        inputArray[indexOfMaximum] = tmp;
    }
  
    return inputArray[k - 1];
}
    