def subtractionByRegrouping(minuend, subtrahend):
    result = []
    memory = 0;
    
    while 0 < subtrahend:
        m = minuend % 10 - memory
        s = subtrahend % 10
        
        if m >= s:
            result.append(m)
            memory = 0
        else:
            result.append(10 + m)
            memory = 1
        
        minuend //= 10
        subtrahend //= 10
    
    return result
