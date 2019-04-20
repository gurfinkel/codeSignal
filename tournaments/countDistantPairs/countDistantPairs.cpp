int countDistantPairs(std::string inputString, int distance) {

  int answer = 0;

  for (int i = 0; i + distance + 1 < inputString.size(); i++) {
    if (inputString[i] == inputString[i + distance + 1]) {
      answer++;
    }
  }

  return answer;
}
