function swapDiagonals(matrix) {
    for(let i = 0; i < Math.floor(matrix.length / 2); i++){
        let temp = matrix[i][i]
        matrix[i][i] = matrix[i][matrix.length - 1 - i]
        matrix[i][matrix.length - 1 - i] = temp
        
        temp = matrix[matrix.length - 1 - i][i]
        matrix[matrix.length - 1 - i][i] = matrix[matrix.length - 1 - i][matrix.length - 1- i]
        matrix[matrix.length - 1 - i][matrix.length - 1- i] = temp
    }
    return matrix
}
