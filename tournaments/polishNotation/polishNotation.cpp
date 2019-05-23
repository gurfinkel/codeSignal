int polishNotation(std::vector<std::string> tokens) {
  struct Helper {
    bool isNumber(std::string stringRepresentation) {
      return stringRepresentation.size() > 1 ||
             '0' <= stringRepresentation[0] &&
             stringRepresentation[0] <= '9';
    }
  };
  std::vector<std::string> myStack;
  Helper h;

  for (int i = 0; i < tokens.size(); i++) {
    myStack.push_back(tokens[i]);
    while (myStack.size() > 2 && h.isNumber(myStack[myStack.size() - 1])
        && h.isNumber(myStack[myStack.size() - 2])) {
      int leftOperand = std::stoi(myStack[myStack.size() - 2]);
      int rightOperand = std::stoi(myStack[myStack.size() - 1]);
      int result = 0;
      if (myStack[myStack.size() - 3] == "-") {
        result = leftOperand - rightOperand;
      }
      if (myStack[myStack.size() - 3] == "+") {
        result = leftOperand + rightOperand;
      }
      if (myStack[myStack.size() - 3] == "*") {
        result = leftOperand * rightOperand;
      }
      myStack.erase(myStack.end() - 3, myStack.end());
      myStack.push_back(std::to_string(result));
    }
  }

  return std::stoi(myStack[0]);
}
