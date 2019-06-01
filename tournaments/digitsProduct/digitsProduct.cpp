int digitsProduct(int product) {

  std::vector<int> answerDigits;
  int answer = 0;

  if (!product) {
    return 10;
  }

  if (product == 1) {
    return 1;
  }

  for (int divisor = 9; divisor > 1; divisor--) {
    while (product % divisor == 0) {
      product /= divisor;
      answerDigits.push_back(divisor);
    }
  }

  if (product > 1) {
    return -1;
  }


  for (int i = (int)answerDigits.size() - 1; i >= 0; i--) {
    answer = 10 * answer + answerDigits[i];
  }
  return answer;
}
