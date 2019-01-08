def josephusProblem(n, k):    
    removed = []
    currentPerson = 0

    for i in range(n):
        removed.append(False)

    for i in range(1, n):
        skipped = 0
        while skipped < k - 1:
            if not removed[currentPerson]:
                skipped += 1
            currentPerson = (currentPerson + 1) % n
        while removed[currentPerson]:
            currentPerson = (currentPerson + 1) % n
        removed[currentPerson] = True

    for i in range(n):
        if not removed[i]:
            return i + 1
