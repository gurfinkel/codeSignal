def isDivisibleBy6(inputString):
    result = []
    for i in range(10):
        a = inputString.replace('*', str(i))
        if int(a) % 6 == 0:
            result.append(a)
    return result
