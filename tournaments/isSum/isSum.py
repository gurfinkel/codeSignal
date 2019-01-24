def isSum(value):
    index = 1
    sum = 0
    
    while value > sum:
        sum += index
        index += 1

    return value == sum
