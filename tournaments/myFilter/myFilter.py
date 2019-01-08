def myFilter(inputArray, extraElement):
    
    result = []
    for i in range(len(inputArray)):
        if inputArray[i] == extraElement:
            continue
        result.append( inputArray[i])

    return result
