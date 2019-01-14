def directionOfReading(numbers):
    l = len(numbers)
    r = []
    
    for n in numbers:        
        r.append(('0'*l + str(n))[-l:])
        
    result = []
    
    for i in range(l):
        s = []
        for j in range(l):
            s.append(r[j][i])
        result.append(int("".join(s)))
        
    return result
