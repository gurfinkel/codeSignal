function runLengthEncoding(inputString) {

    var repeatLength = 1,
        answer = [];
    for (var i = 1; i < inputString.length; i++) {
        if (inputString[i] !== inputString[i - 1]) {
            answer.push(repeatLength);
            answer.push(inputString[i - 1]);
            repeatLength = 1;
        }
        else {
            repeatLength++;
        }
    }
    answer.push(repeatLength);
    answer.push(inputString[inputString.length - 1]);

    return answer.join('');
}
    