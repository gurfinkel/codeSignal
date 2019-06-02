typedef std::vector<int> vect;

vect extractMatrixColumn(std::vector<vect> matrix, int column) {

  vect result;
  for (int i = 0; i < matrix.size(); i++) {
    result.push_back(matrix[i][column]);
  }

  return result;
}
