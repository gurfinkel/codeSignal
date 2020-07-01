string characterParity(char symbol) {
    if (char.IsDigit(symbol)) {
        if (1 == ((symbol - '0') & 1)) {
            return "odd";
        } else {
            return "even";
        }
    } else {
        return "not a digit";
    }
}
