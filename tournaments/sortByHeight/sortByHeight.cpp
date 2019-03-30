std::vector<int> sortByHeight(std::vector<int> a) {
  for (int i = 0; i < a.size(); i++) {
    int minIndex = -1,
        tmp = a[i];
    if (a[i] == -1) {
      continue;
    }
    for (int j = i; j < a.size(); j++) {
      if (a[j] != -1) {
        if (minIndex == -1 || a[j] < a[minIndex]) {
          minIndex = j;
        }
      }
    }
    a[i] = a[minIndex];
    a[minIndex] = tmp;
  }
  return a;
}
