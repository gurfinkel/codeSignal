def differentValues(a, d):
    result = -1
    
    for i in range(len(a)):
        for j in range(i + 1, len(a)):
            diff = abs(a[j] - a[i])
            if 0 <= d - diff and d - diff <= d - result:
                result = diff
    
    return result
