def primeFactors(n):
    factors = []
    divisor = 2

    while n >= 2:
        if n % divisor == 0:
            factors.append(divisor)
            n//=divisor
        else:
            divisor += 1
    return factors
