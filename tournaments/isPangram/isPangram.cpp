bool isPangram(std::string sentence) {
  bool found[26],
       result = true;
  for (int i = 0; i < 26; i++) {
    found[i] = false;
  }
  for (int i = 0; i < sentence.size(); i++) {
    int code = int(sentence[i]);
    if (int('A') <= code && code <= int('Z')) {
      code += int('a') - int('A');
    }
    if (int('a') <= code && code <= int('z')) {
      found[code - int('a')] = true;
    }
  }

  for (int i = 0; i < 26; i++) {
    if (!found[i]) {
      result = false;
    }
  }

  return result;
}
