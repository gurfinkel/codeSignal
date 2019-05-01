typedef std::vector<std::vector<int>> Matrix;

Matrix constructSubmatrix(Matrix matrix,
                          std::vector<int> rowsToDelete,
                          std::vector<int> columnsToDelete) {

  std::vector<int> line((int)matrix[0].size() - (int)columnsToDelete.size());
  Matrix res((int)matrix.size() - (int)rowsToDelete.size(), line);
  std::vector<bool> useRow(matrix.size(), true);
  std::vector<bool> useColumn(matrix[0].size(), true);

  for (int i = 0; i < rowsToDelete.size(); i++) {
    useRow[rowsToDelete[i]] = false;
  }
  for (int i = 0; i < columnsToDelete.size(); i++) {
    useColumn[columnsToDelete[i]] = false;
  }

  for (int i = 0, i2 = 0; i < matrix.size(); i++) {
    if (useRow[i]) {
      for (int j = 0, j2 = 0; j < matrix[0].size(); j++) {
        if (useColumn[j]) {
          res[i2][j2++] = matrix[i][j];
        }
      }
      i2++;
    }
  }

  return res;
}
