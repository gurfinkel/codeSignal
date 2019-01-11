def hangman(word, letters):
    f=0
    t=0
    
    for c in letters:
        if 6 <= f:
            return False
        x = word.count(c)
        if 0 == x:
            f += 1
        else:
            t += x
    return len(word) == t
