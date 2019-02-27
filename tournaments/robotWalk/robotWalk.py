def robotWalk(a):
    minX = 0
    minY = -1
    maxX = float('inf')
    maxY = float('inf')

    x = 0
    y = 0

    for i in range(len(a)):
        j = i % 4

        if j == 0:
            y += a[i]
            if y >= maxY:
                return True
            maxY = y

        elif j == 1:
            x += a[i]
            if x >= maxX:
                return True
            maxX = x

        elif j == 2:
            y -= a[i]
            if y <= minY:
                return True
            minY = y

        elif j == 3:
            x -= a[i]
            if x <= minX:
                return True
            minX = x

    return False
