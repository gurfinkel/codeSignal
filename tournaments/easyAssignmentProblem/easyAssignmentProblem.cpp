typedef std::vector<std::vector<int>> matrix;
std::vector<int> easyAssignmentProblem(matrix skills) {
  return skills[0][0] + skills[1][1] > skills[0][1] + skills[1][0] ?
        std::vector<int>({1, 2}) : std::vector<int>({2, 1});
}
