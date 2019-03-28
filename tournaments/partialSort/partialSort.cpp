std::vector<int> partialSort(std::vector<int> input, int k) {
  std::vector<int> answer;
  int infinity = int(1e9);

  for (int i = 0; i < k; i++) {
    int index = 0;
    for (int j = 0; j < input.size(); j++) {
      if (input[j] < input[index]) {
        index = j;
      }
    }
    answer.push_back(input[index]);
    input[index] = infinity;
  }
  for (int i = 0; i < (int)input.size(); i++) {
    if (input[i] != infinity) {
      answer.push_back(input[i]);
    }
  }

  return answer;
}
