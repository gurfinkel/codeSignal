function isCorrectSentence(inputString) {

    var leadChar = inputString[0],
        endChar = inputString[inputString.length - 1];
  
    if ('A' <= leadChar && leadChar <= 'Z' && endChar === '.') {
        return true;
    }
    else {
        return false;
    }
}
