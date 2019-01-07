def divisible(output, left, right):
    for i in range(left, right + 1):
        if 0 != output % i:
            return False

    return True

def smallestMultiple(left, right):
    output = 0
    flag = 0

    while 0 == flag:
        output += 1
        if divisible(output, left, right):
            return output
