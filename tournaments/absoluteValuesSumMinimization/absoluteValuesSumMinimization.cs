int absoluteValuesSumMinimization(std::vector<int> a) {
  int indexOfMinimum = -1;
  int minimalSum = INT32_MAX;

  for (int i = 0; i < a.size(); i++) {
    int sum = 0;
    for (int j = 0; j < a.size(); j++) {
      sum += abs(a[j] - a[i]);
    }
    if (sum < minimalSum) {
      minimalSum = sum;
      indexOfMinimum = i;
    }
  }

  return a[indexOfMinimum];
}