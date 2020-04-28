const polygonPerimeter = matrix => {
    let perimeter = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j]) {
                if (!matrix[i - 1] || !matrix[i - 1][j]) perimeter++;
                if (!matrix[i][j - 1]) perimeter++;
                if (!matrix[i][j + 1]) perimeter++;
                if (!matrix[i + 1] || !matrix[i + 1][j]) perimeter++;
            }
        }
    }
    return perimeter;
}
