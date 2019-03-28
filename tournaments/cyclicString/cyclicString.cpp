int cyclicString(std::string s1) {

  for (int answer = 1; answer < s1.size(); answer++) {
    bool correct = true;
      for (int position = answer; position < s1.size(); position++) {
      if (s1[position] != s1[position - answer]) {
        correct = false;
        break;
      }
    }
    if (correct) {
      return answer;
    }
  }
  return s1.size();
}
