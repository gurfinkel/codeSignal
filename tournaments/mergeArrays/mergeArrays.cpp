std::vector<int> mergeArrays(std::vector<int> a, std::vector<int> b) {

  std::vector<int> result;
  int i, j;

  for (i = 0, j = 0; i < a.size() && j < b.size(); ) {
    if (a[i] < b[j]) {
      result.push_back(a[i]);
      i++;
    }
    else {
      result.push_back(b[j]);
      j++;
    }
  }

  while (i < a.size()) {
    result.push_back(a[i]);
    i++;
  }

  while (j < b.size()) {
    result.push_back(b[j]);
    j++;
  }

  return result;
}
