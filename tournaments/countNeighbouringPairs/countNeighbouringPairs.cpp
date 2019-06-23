int countNeighbouringPairs(std::string inputString) {

  int answer = 0;

  for (int i = 0; i + 1 < inputString.size(); i++) {
    if (inputString[i] == inputString[i + 1]) {
      answer++;
    }
  }

  return answer;
}
