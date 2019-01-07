int differentSquares(std::vector<std::vector<int>> matrix) {
    std::set<int> a;
    for (int i = 0; i < matrix.size()-1; ++i)
        for (int j = 0; j < matrix[0].size()-1; ++j)
            a.insert(matrix[i][j]*1000+matrix[i][j+1]*100+matrix[i+1][j]*10+matrix[i+1][j+1]);
    return a.size();
}