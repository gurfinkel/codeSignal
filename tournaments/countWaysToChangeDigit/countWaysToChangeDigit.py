def countWaysToChangeDigit(value):
    result = 0

    for i in str(value):
        result += 9 - int(i)

    return result
