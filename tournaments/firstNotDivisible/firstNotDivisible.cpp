int firstNotDivisible(std::vector<int> divisors, int start) {

  for (int answer = start; ; answer++) {
    bool correct = true;
    for (int i = 0; i < divisors.size(); i++) {
      if (answer % divisors[i] == 0) {
        correct = false;
        break;
      }
    }
    if (correct) {
      return answer;
    }
  }
}
