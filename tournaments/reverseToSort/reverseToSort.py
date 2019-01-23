def reverseToSort(inputArray):
    
    for i in range(len(inputArray)):
        for j in range(i + 1, len(inputArray) + 1):
            left = inputArray[:i]
            middle = inputArray[i:j]
            middle.reverse()
            right = inputArray[j:]
            result = []
            correct = True

            result = left + middle + right

            for k in range(1, len(result)):
                if result[k - 1] >= result[k]:
                    correct = False
                    break
            if correct:
                return True
    return False
