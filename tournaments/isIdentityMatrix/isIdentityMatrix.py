def isIdentityMatrix(matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if i == j and matrix[i][j] != 1 or i != j and matrix[i][j] != 0:
                   return False
    return True
