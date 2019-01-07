def constructSubmatrix(matrix, rowsToDelete, columnsToDelete):
    
    res = []
    useRow = []
    useColumn = []

    for i in range(len(matrix)):
        useRow.append(True)
    for i in range(len(matrix[0])):
        useColumn.append(True)

    for i in range(len(rowsToDelete)):
        useRow[ rowsToDelete[i] ] = False
    for i in range(len(columnsToDelete)):
        useColumn[ columnsToDelete[i] ] = False

    for i in range(len(matrix)):
        if useRow[i]:
            res.append([])
            for j in range(len(matrix[0])):
                if useColumn[j]:
                    res[-1].append(matrix[i][j])

    return res
