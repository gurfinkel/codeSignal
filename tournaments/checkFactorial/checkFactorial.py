def checkFactorial(n):
    k = 1

    while 1 != n:
        if (0 == n % k):
            n /= k
            k += 1
        else:
            return False

    return True
