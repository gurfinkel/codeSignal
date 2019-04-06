std::vector<int> makeArrayConsecutive(std::vector<int> sequence) {

  std::vector<int> answer;
  int current_position = 0;

  sort(sequence.begin(), sequence.end());
  for (int i = sequence[0]; i < sequence[(int)sequence.size() - 1]; i++) {
    if (sequence[current_position] != i) {
      answer.push_back(i);
    }
    else {
      current_position++;
    }
  }

  return answer;
}
