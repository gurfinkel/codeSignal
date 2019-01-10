def makeArrayConsecutive2(statues):
    minimum = min(statues)
    maximum = max(statues)
    size = len(statues)
    
    return maximum - minimum - size + 1
