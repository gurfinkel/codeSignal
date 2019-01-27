def isPrime(n):
    for i in range(2, 1 + int(math.sqrt(n))):
        if 0 == n % i:
            return False
    return True