function isSentenceCorrect(sentence) {
    return /^[A-Z][^?.!]*[?.!]$/.test(sentence);
}
