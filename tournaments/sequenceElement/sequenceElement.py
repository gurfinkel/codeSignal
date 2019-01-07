def sequenceElement(a, n):
    MOD = 10**5
    seq = []
    for i in range(5):
        seq.append(a[i])

    lastFive = (a[0] * 10**4 + a[1] * 10**3 +
                a[2] * 10**2 + a[3] * 10 + a[4])
    was = {}
    was[lastFive] = 4

    i = 5
    while True:
        seq.append((seq[i - 1] + seq[i - 2] +
                    seq[i - 3] + seq[i - 4] + seq[i - 5]) % 10)
        lastFive = (seq[i - 1] , seq[i - 2] ,
                    seq[i - 3] , seq[i - 4] , seq[i - 5])
        if lastFive in was:
            last = was[lastFive]
            return seq[n % (i - last)]
        else:
            was[lastFive] = i
        i += 1