def specialPolynomial(x, n):
    sum = 0
    k = 0
    while n > sum:
        k += 1
        sum += x ** k
            
    return k - 1
