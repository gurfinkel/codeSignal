def regularBracketSequence1(sequence):
    balance = 0
    for i in range(len(sequence)):
        if sequence[i] == '(':
            balance += 1
        else:
            balance -= 1
        if balance < 0:
            return False
    if balance != 0:
        return False
    return True
