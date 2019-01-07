def divisorsPairs(sequence):
    a = 0
    for x in sequence:
        for y in sequence:
            if 0 == x % y:
                a += 1
                
    return a - len(sequence)