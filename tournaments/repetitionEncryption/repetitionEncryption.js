function repetitionEncryption(letter) {
    const result = letter.match(/([a-z]+)[^a-z]+\1(?![a-z])/gi);
    return result ? result.length : 0;
}
