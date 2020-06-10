int dotProduct(std::vector<int> v1, std::vector<int> v2) {
  int result = 0;
  for (int i = 0; i < 3; i++) {
    result += v1[i] * v2[i];
  }
  return result;
}
