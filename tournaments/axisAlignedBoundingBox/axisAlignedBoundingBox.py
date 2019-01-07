def axisAlignedBoundingBox(x, y):
    
    minX = x[0]
    maxX = x[0]
    minY = y[0]
    maxY = y[0]

    for i in range(1, len(x)):
        minX = min(x[i], minX)
        maxX = max(x[i], maxX)
        minY = min(y[i], minY)
        maxY = max(y[i], maxY)

    return (maxX - minX) * (maxY - minY)