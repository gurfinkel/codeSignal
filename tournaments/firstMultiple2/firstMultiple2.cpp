int firstMultiple2(std::vector<int> divisors, int start) {

  for (int answer = start; ; answer++) {
    for (int i = 0; i < divisors.size(); i++) {
      if (answer % divisors[i] == 0) {
        return answer;
      }
    }
  }
}
