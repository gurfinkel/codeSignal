def binarySearch(inputArray, searchElement):
    
    minIndex = -1
    maxIndex = len(inputArray)

    while minIndex < maxIndex - 1:
        currentIndex = (minIndex + maxIndex) // 2
        currentElement = inputArray[currentIndex]

        if currentElement < searchElement:
            minIndex = currentIndex
        else:
            maxIndex = currentIndex

    if maxIndex == len(inputArray) or inputArray[maxIndex] != searchElement:
        return -1
    return maxIndex
