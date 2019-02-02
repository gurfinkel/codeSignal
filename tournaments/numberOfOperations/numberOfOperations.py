def numberOfOperations(a, b):
    if 0 == a % b:
        return 1 + numberOfOperations(a // b, b)
    else:
        if 0 == b % a:
            return 1 + numberOfOperations(a, b // a)
    return 0
