bool regularBracketSequence1(std::string sequence) {

  int balance = 0;
  for (int i = 0; i < sequence.size(); i++) {
    if (sequence[i] == '(') {
      balance++;
    }
    else {
      balance--;
    }
    if (balance < 0) {
      return  false ;
    }
  }
  if (balance) {
    return false;
  }
  return true;
}
