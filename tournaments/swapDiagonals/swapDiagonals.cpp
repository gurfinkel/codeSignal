std::vector<std::vector<int>> swapDiagonals(std::vector<std::vector<int>> matrix) {
    for (int i = 0; i < matrix.size(); ++i)
		std::swap(matrix[i][matrix.size() - i - 1], matrix[i][i]);
	return matrix;
}
