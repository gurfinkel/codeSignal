typedef std::vector<std::string> vec_1d;

vec_1d allLongestStrings(vec_1d inputArray) {

  vec_1d answer = {inputArray[0]};
  for (size_t i = 1; i < inputArray.size(); i++) {
    if (inputArray[i].size() == answer[0].size()) {
      answer.push_back(inputArray[i]);
    }
    if (inputArray[i].size() > answer[0].size()) {
      answer = {inputArray[i]};
    }
  }
  return answer;
}
