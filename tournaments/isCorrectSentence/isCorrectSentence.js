function isCorrectSentence(inputString) {
    return 'A' <= inputString[0] && inputString[0] <= 'Z' && inputString[inputString.length - 1] === '.';
}
