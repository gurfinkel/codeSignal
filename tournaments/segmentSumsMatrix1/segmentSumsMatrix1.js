function segmentSumsMatrix1(inputArray) {

    var answer = [];
    for (var i = 0; i < inputArray.length; i++) {
        var line = [];
        for (var j = 0; j < inputArray.length; j++) {
            line.push(0);
        }
        answer.push(line);
    }
    for (var i = 0; i < inputArray.length; i++) {
        for (var j = i; j >= 0; j--) {
            for (var k = i; k < inputArray.length; k++) {
                answer[j][k] += inputArray[i];
                answer[k][j] += inputArray[i];
            }
        }
        answer[i][i] -= inputArray[i];
    }
  
    return answer;
}
