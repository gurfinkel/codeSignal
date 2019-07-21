std::vector<int> cyclicQueue(std::vector<std::string> commands) {

  const int maxSize = 10;
  std::vector<int> myQueue(maxSize, 0);
  std::vector<int> answer;
  int head = 0;
  int tail = 0;
  int sum = 0;

  for (int i = 0; i < commands.size(); i++) {
    if (commands[i] == "-") {
      sum -= myQueue[head];
      head = (head + 1) % maxSize;
    }
    else {
      int value = 0;
      for (int j = 1; j < commands[i].size(); j++) {
        value = value * 10 + commands[i][j] - '0';
      }
      sum += value;
      myQueue[tail] = value;
      tail = (tail + 1) % maxSize;
    }
    answer.push_back(sum);
  }

  return answer;
}
