def sumOfDivisors(n):
    result = 0

    i = 1
    while i * i <= n:
        if n % i == 0:
            result += i
            if i * i != n:
                result += n / i
        i += 1

    return result