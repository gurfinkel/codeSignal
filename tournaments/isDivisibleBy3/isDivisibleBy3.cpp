std::vector<std::string> isDivisibleBy3(std::string inputString) {

  int digitSum = 0;
  int leftBound = int('0');
  int rightBound = int('9');
  std::vector<std::string> answer;
  int asteriskPos = -1;

  for (int i = 0; i < inputString.size(); i++) {
    if (leftBound <= inputString[i] &&
        inputString[i] <= rightBound) {
      digitSum += inputString[i] - leftBound;
    }
    else {
      asteriskPos = i;
    }
  }

  for (int i = 0; i < 10; i++) {
    if ((digitSum + i) % 3 == 0) {
      inputString[asteriskPos] = char(leftBound + i);
      answer.push_back(inputString);
    }
  }

  return answer;
}
