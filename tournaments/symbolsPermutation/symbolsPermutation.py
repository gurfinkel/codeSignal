def symbolsPermutation(word1, word2):
    a = list(word1)
    a.sort()

    b = list(word2)
    b.sort()

    return a == b
