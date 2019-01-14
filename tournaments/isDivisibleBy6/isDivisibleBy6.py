def isDivisibleBy6(inputString):
    ans = []
    for i in range(10):
        x = inputString.replace('*', str(i))
        if int(x) % 6 == 0:
            ans.append(x)
    return ans