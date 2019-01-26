function arrayMaximalDifference(inputArray) {

    var answer = 0;
    for (var i = 0; i < inputArray.length; i++) {
        for (var j = 0; j < inputArray.length; j++) {
            if (inputArray[i] - inputArray[j] > answer) {
                answer = inputArray[i] - inputArray[j];
            }
        }
    }
    return answer;
}
    