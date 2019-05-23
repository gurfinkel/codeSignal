def hangman(word, letters):
    result = 0
    a = 0

    for item in letters:
        if 6 <= a:
            return False
        b = word.count(item)
        if 0 == b:
            a += 1
        else:
            result += b

    return len(word) == result
