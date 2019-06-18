int makeArrayConsecutive2(std::vector<int> statues) {

  int current_position = 0,
      answer = 0;

  sort(statues.begin(), statues.end());
  for (int i = statues[0]; i < statues[(int)statues.size() - 1]; i++) {
    if (statues[current_position] != i) {
      answer++;
    }
    else {
      current_position++;
    }
  }

  return answer;
}
