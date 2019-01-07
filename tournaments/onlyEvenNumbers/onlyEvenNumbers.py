def onlyEvenNumbers(left, right):
    if left % 2:
        left += 1
    return list(range(left, right + 1, 2))