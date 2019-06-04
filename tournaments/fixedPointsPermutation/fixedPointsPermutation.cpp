int fixedPointsPermutation(std::vector<int> permutation) {

  int result = 0;

  for (int i = 0; i < permutation.size(); i++) {
    if (permutation[i] == i + 1) {
      result++;
    }
  }

  return result;
}
