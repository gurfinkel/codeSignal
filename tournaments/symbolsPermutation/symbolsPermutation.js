function symbolsPermutation(word1, word2) {
    return [...word1].sort().join('') === [...word2].sort().join('')
}
